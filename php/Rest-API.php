<?php

use de\eriktunsch\basket\user\Login;

require 'server.php';
require 'lib/RateLimit/ratelimit.php';
$ResponseGenerator = new \de\eriktunsch\basket\rest\ResponseGenerator();
$Responses = new \de\eriktunsch\basket\rest\Responses();

if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

if ((new Login)->isLoggedin()) {
    if (ratelimiter(3000000000000, 1, false, hash('sha256', $ip))) {
        $class_temp = "\\de\\eriktunsch\\basket\\rest\\queries\\" . $_GET['action'];
        if (class_exists($class_temp)) {
            $class = new $class_temp();
            echo $class->execute($_POST);
        } else {
            echo $ResponseGenerator->GenerateResponse($Responses->InvalidRequest());
        }
    } else {
        echo $ResponseGenerator->GenerateResponse($Responses->RateLimit());
    }
}
