<?php
//RUN EVERY DAY
include('../server.php');

$stmt = $db->query('SELECT * FROM rents WHERE returned IS NULL');

while (($obj = $stmt->fetch_object()) != null) {
    $date = new DateTime($obj->start);
    $date->modify('+20 day');

    if (strtotime($date->format('Y-m-d')) > time()) {
        $stmt_disable = $db->prepare('UPDATE users SET disabled=1 WHERE id=?');
        $stmt_disable->bind_param("s", $obj->user);
        $stmt_disable->execute();
    }
}
