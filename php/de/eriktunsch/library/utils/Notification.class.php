<?php

namespace de\eriktunsch\library\utils;

use mysqli;
use de\eriktunsch\library\utils\Settings;
use de\eriktunsch\library\utils\Variable;

class Notification
{
    public function sendNewsletter($email, $subject, $message)
    {

        $Variable = new Variable();
        $db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
        $Settings = new Settings();

        $body = str_replace("{{message}}", $message, file_get_contents('https://' . $Settings->getSettings('url') . '/php/html/newsletter.html'));

        $stmt = $db->prepare('INSERT INTO emails (email, subject, body) VALUES (?, ?, ?)');

        $email_json = json_encode($email);
        $stmt->bind_param("sss", $email_json, $subject, $body);
        $stmt->execute();
    }

    public function sendEmail($email, $subject, $message)
    {

        $Variable = new Variable();
        $db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
        $Settings = new Settings();

        $body = str_replace("{{subject}}", $subject, str_replace("{{message}}", $message, file_get_contents('https://' . $Settings->getSettings('url') . '/php/html/email.html')));

        $stmt = $db->prepare('INSERT INTO emails (email, subject, body) VALUES (?, ?, ?)');

        $email_json = json_encode($email);
        $stmt->bind_param("sss", $email_json, $subject, $body);
        $stmt->execute();
    }
}
