<?php
//RUN EVERY DAY
ini_set("memory_limit", "-1");
set_time_limit(0);

include __DIR__ . '/../server.php';

use de\eriktunsch\library\utils\Email;

$email = new Email();

$infos = $db->query('SELECT * FROM emails WHERE sended=0 LIMIT 100');
while (($daten_infos = $infos->fetch_object()) != null) {
    $json = json_decode($daten_infos->email, true);

    $emails = $json;
    try {
        $email->sendEmail($emails, $daten_infos->subject, $daten_infos->body, $Settings->getSettings("smtp_from_mail"), $Settings->getSettings("smtp_from"));
    } catch (Exception $e) {
    }
    $db->query('UPDATE emails SET sended = 1 WHERE id = ' . $daten_infos->id);
}

$db->query('DELETE FROM emails WHERE sended=1');
