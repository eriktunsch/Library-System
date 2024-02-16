<?php

include('../php/server.php');

use de\eriktunsch\library\user\User;
use LdapRecord\Container;
use LdapRecord\Connection;

if (!$Login->isLoggedin()) {
    $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
    die;
}
include('../php/html/menu.php');

$connection = new Connection([
    'hosts' => ['192.168.1.112'],
    'port' => 389,
    'base_dn' => 'dc=humboldt-makerspace,dc=de',
    'username' => 'cn=server-login,ou=users,dc=humboldt-makerspace,dc=de',
    'password' => 'boswteq6kt#THF7YoDoLK9@4**vvd$L',
]);

// Add the connection into the container:
Container::addConnection($connection);

$query = $connection->query();
$query->where('objectClass', '=', "user");
$query->select(['sn', 'givenName', 'uid', 'cn', 'uidNumber']);
$query->limit(0);
$query->in("ou=users,dc=humboldt-makerspace,dc=de");

$users = $query->get();

?>
<title><?php echo $Settings->getSettings("html_title"); ?> - Admin</title>

<br>
<br>
<br>
<div style="transition-duration: 0.5s; max-width: 90% !important; margin: 0 auto;">
    <?php if ($User->isAdmin()) { ?>
        <div class="row mt-3" style="vertical-align: middle">
            <div class="col-lg col-md-9 col-sm-9" style="background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; ; border-radius: 15px; padding-left: 0px; padding-right: 0px; margin-right: 15px">
                <div style="background: #5E24C3; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                    <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-solid fa-plus" style="margin-right: 5px;"></i>Neuen Artikel</p>
                </div>
                <div style="padding: 15px">
                    <form style="color: #757575; padding: 15px" id="new_item">

                        <div class="form-row mb-4">
                            <div class="col-md-6">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-group-text-own" id="basic-addon1">Name</span>
                                    </div>
                                    <input type="text" id="name" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-group-text-own" id="basic-addon1">Preis</span>
                                    </div>
                                    <input type="number" step="0.01" id="price" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-row mb-4">
                            <div class="col-md-6">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-group-text-own" id="basic-addon1">EAN</span>
                                    </div>
                                    <input type="text" id="ean" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-group-text-own" id="basic-addon1">Bild</span>
                                    </div>
                                    <input type="file" id="picture" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-12">
                                <button class="btn btn-outline-primary btn-rounded btn-block z-depth-0 mt-2 waves-effect" type="button" onclick="newItem();">Hinzufügen</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg col-md-3 col-sm-3" style="background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; ; border-radius: 15px; padding-left: 0px; padding-right: 0px;">
                <div style="background: #5E24C3; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                    <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-solid fa-road-circle-check" style="margin-right: 5px;"></i>Karte/Chip testen</p>
                </div>
                <div style="padding: 15px">
                    <form style="color: #757575; padding: 15px">

                        <div class="form-row mb-4">
                            <div class="col-md-5">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-group-text-own" id="basic-addon1">Username</span>
                                    </div>
                                    <input type="text" id="read_username" class="form-control" disabled>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-group-text-own" id="basic-addon1">Name</span>
                                    </div>
                                    <input type="text" id="read_name" class="form-control" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mb-4">
                            <div class="col-md-12">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text input-group-text-own" id="basic-addon1">Token</span>
                                    </div>
                                    <input type="text" id="read_token" class="form-control" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-12">
                                <button class="btn btn-outline-success btn-rounded z-depth-0 mr-2 waves-effect" type="button" id="testCard" onclick="startCheck()">Test Card</button>
                                <button class="btn btn-outline-danger btn-rounded z-depth-0 mr-2 waves-effect" type="button" id="stopTest" onclick="stopCheck()" disabled>Stop Testing</button></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row mt-3" style="vertical-align: middle">

            <div class="col-lg col-md-6 col-sm-6" style='background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); border-radius: 15px; margin-top: 25px; margin-right: 15px; padding: 0px'>
                <div style="background: #5E24C3; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                    <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-solid fa-users" style="margin-right: 5px;"></i>User
                        <button class="btn btn-outline-primary btn-rounded z-depth-0 mr-2 waves-effect" type="button" id="connect">Connect to writer</button>
                </div>
                <div style="padding: 15px">
                    <?php
                    echo $Table->printTableHead("table-user", array("Username", "Vorname", "Nachname", "Guthaben", ""));


                    for ($i = 0; $i < count($users); $i++) {
                        echo "<tr>";
                        echo "<td>" . $users[$i]["cn"][0] . "</td>";
                        echo "<td>" . $users[$i]["givenname"][0] . "</td>";
                        echo "<td>" . $users[$i]["sn"][0] . "</td>";
                        echo "<td id='balance_" . $users[$i]["cn"][0] . "'>" . (new User($users[$i]["cn"][0]))->getBalance() . " Euro</td>";
                        echo '<td><button class="btn btn-outline-success btn-sm btn-rounded z-depth-0 mt-2 waves-effect" type="button" onclick="loadBalancer(\'' . $users[$i]["cn"][0] . '\');openModal(\'balancer\');">Balance</button><button class="btn btn-outline-warning btn-sm btn-rounded z-depth-0 mt-2 waves-effect writeNFC" data-id="' . $users[$i]["cn"][0] . '" type="button">Write NFC Tag</button></td>';
                        echo "</tr>";
                    }
                    echo $Table->printTableFooter(); ?>
                </div>
            </div>

            <div class="col-lg col-md-6 col-sm-6" style='background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); border-radius: 15px; margin-top: 25px; padding: 0px'>
                <div style="background: #5E24C3; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                    <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-solid fa-meteor" style="margin-right: 5px;"></i>Artikel</p>
                </div>
                <div style="padding: 15px">
                    <?php
                    echo $Table->printTableHead("table-items", array("ID", "Bild", "Name", "Preis", "EAN", ""));
                    echo $Table->printTableFooter(); ?>
                </div>
            </div>
        </div>

        <div style='background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; ; border-radius: 15px; margin-top: 25px;'>
            <div style="background: #5E24C3; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-regular fa-credit-card" style="margin-right: 5px;"></i>Einkaushistorie</p>
            </div>
            <div style="padding: 15px">
                <?php
                echo $Table->printTableHead("table-historyAll", array("Datum", "username", "Bild", "Artikel", "Preis", "Anzahl"));
                echo $Table->printTableFooter(); ?>
            </div>
        </div>

        <?php echo $Modal->printModalHead("changer", "Change Item", "style=\"max-width: 50%\""); ?>
        <div id="changer_content"></div>
        <?php echo $Modal->printModalFooter(); ?>
        <?php echo $Modal->printModalHead("balancer", "Balance User", "style=\"max-width: 50%\""); ?>
        <div id="balancer_content"></div>
        <?php echo $Modal->printModalFooter(); ?>
        <?php
        echo $LoadResource->insertJS("intern/admin.js");

        ?>

    <?php } else {
        echo $MessageContainer->displayMessageContainer("Permission denied!", "danger", true);
    } ?>
</div>


<?php
include('../php/html/footer.php'); ?>