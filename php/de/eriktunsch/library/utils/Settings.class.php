<?php

namespace de\eriktunsch\basket\utils;

use \de\eriktunsch\basket\utils\Variable;
use mysqli;

class Settings
{
    public function getSettings($key)
    {
        $Variable = new Variable();
        $db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
        $stmt = $db->prepare("SELECT * FROM settings WHERE `key` =? ");
        $stmt->bind_param("s", $key);
        $stmt->execute();
        $daten_infos = $stmt->get_result()->fetch_object();
    
        return $daten_infos->value;
    }

    public function setSettings($key, $value)
    {
        $Variable = new Variable();
        $db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
        $stmt = $db->prepare("UPDATE settings SET value=? WHERE `key` =? ");
        $stmt->bind_param("ss", $value, $key);
        $stmt->execute();
    }
}
