<?php

namespace de\eriktunsch\basket\utils;

use mysqli;
use de\eriktunsch\basket\utils\Settings;
use de\eriktunsch\basket\utils\Variable;

class Notification
{
    public function sendEmail($email, $username, $subject, $title, $message, $verifier = false)
    {

        $Variable = new Variable();
        $db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
        $Settings = new Settings();

        $body = str_replace("{{message}}", $message, str_replace("{{title}}", $title, file_get_contents('https://' . $Settings->getSettings('url') . '/php/html/email.html')));

        if ($verifier) {
            $stmt = $db->prepare('INSERT INTO emails (email, username, subject, body, verifier) VALUES (?, ?, ?, ?, "1")');
        } else {
            $stmt = $db->prepare('INSERT INTO emails (email, username, subject, body) VALUES (?, ?, ?, ?)');
        }
        $stmt->bind_param("ssss", $email, $username, $subject, $body);
        $stmt->execute();
    }
}
