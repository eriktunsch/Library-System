<?php
//RUN ONCE A WEEK
use de\eriktunsch\library\utils\Notification;

include('../server.php');

$stmt = $db->query('SELECT * FROM books WHERE added_date >= NOW() - INTERVAL 1 WEEK');

$html = "";

if ($stmt->num_rows == 0) {
    die;
}

$i = 0;

while (($obj = $stmt->fetch_object()) != null) {
    $thumbnail_stmt = $db->prepare('SELECT * FROM thumbnails WHERE isbn=?');
    $thumbnail_stmt->bind_param("s", $obj->isbn);
    $thumbnail_stmt->execute();
    $res = $thumbnail_stmt->get_result();
    $thumbnail = $res->fetch_object()->image;

    if ($i == 0 || $i % 3 == 0) {
        $html .= "<tr>";
    }

    $html .= '<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
    <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tr>
            <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                <div class="alignment" align="center" style="line-height:10px">
                    <div style="max-width: 192.667px;"><img src="data:image/png;base64,' . $thumbnail . '" style="display: block; height: auto; border: 0; width: 100%;" width="192.667"></div>
                </div>
            </td>
        </tr>
    </table>
    <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tr>
            <td class="pad" style="padding-top:15px;text-align:center;width:100%;">
                <h2 style="margin: 0; color: #191d33; direction: ltr; font-family: \'Oswald\', Arial, \'Helvetica Neue\', Helvetica, sans-serif; font-size: 23px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 27.599999999999998px;"><span class="tinyMce-placeholder">' . $obj->title . '</span></h2>
            </td>
        </tr>
    </table>
    <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tr>
            <td class="pad" style="padding-top:15px;text-align:center;width:100%;">
                <h2 style="margin: 0; color: #191d33; direction: ltr; font-family: \'Oswald\', Arial, \'Helvetica Neue\', Helvetica, sans-serif; font-size: 22px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 26.4px;"><span class="tinyMce-placeholder">' . $obj->subtitle . '</span></h2>
            </td>
        </tr>
    </table>
    <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
        <tr>
            <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
                <div style="color:#4a4e6d;direction:ltr;font-family:\'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
                    <p style="margin: 0;">' . $obj->description . '</p>
                </div>
            </td>
        </tr>
    </table>
</td>';

if (($i + 1) % 3 == 0) {
    $html .= "</tr>";
}

$i++;
}

$stmt = $db->query('SELECT * FROM users WHERE newsletter=1');

$emails = array();

while (($obj = $stmt->fetch_object()) != null) {
    array_push($emails, $obj->email);
}

(new Notification)->sendNewsletter($emails, "Neue Bücher in der Bibliothek", $html);

echo str_replace("{{message}}", $html, str_replace("{{title}}", "", file_get_contents('https://' . $Settings->getSettings('url') . '/php/html/newsletter.html')));
