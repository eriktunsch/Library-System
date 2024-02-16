<?php
include('../php/server.php');

$Cookies = new \de\eriktunsch\library\utils\Cookies();

$Cookies->unset_cookie("identifier");

session_destroy();

header('Location: https://auth.humboldt-makerspace.de/application/o/library/end-session/');

