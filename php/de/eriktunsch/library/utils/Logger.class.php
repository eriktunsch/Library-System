<?php

namespace de\eriktunsch\library\utils;

use mysqli;
use de\eriktunsch\library\utils\Variable;

class Logger
{
    public function createLog($user, $entry, $message, $color)
    {
        $Variable = new Variable();
        $db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));

        $stmt = $db->prepare("INSERT INTO log (entry, user, message, color) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $entry, $user, $message, $color);
        $stmt->execute();
    }
}
