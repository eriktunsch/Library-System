<?php
include('../php/server.php');

$Cookies = new \de\eriktunsch\basket\utils\Cookies();

$Cookies->unset_cookie("identifier");

session_destroy();

header('Location: https://auth.humboldt-makerspace.de/application/o/basket/end-session/');

