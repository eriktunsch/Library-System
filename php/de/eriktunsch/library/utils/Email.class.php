<?php

namespace de\eriktunsch\basket\utils;

use Swift_SmtpTransport;
use Swift_Mailer;
use Swift_Message;

class Email
{
    public function sendEmail($email, $subject, $message, $replyAddress, $replyName)
    {
        $Settings = new Settings();
        $transport = (new Swift_SmtpTransport($Settings->getSettings("smtp_host"), intval($Settings->getSettings("smtp_port")), 'tls'))
            ->setUsername($Settings->getSettings("smtp_user"))
            ->setPassword($Settings->getSettings("smtp_pass"))
            ->setStreamOptions(array('ssl' => array('allow_self_signed' => true, 'verify_peer' => false)));

        // Create the Mailer using your created Transport
        $mailer = new Swift_Mailer($transport);

        // Create a message
        $messageM = (new Swift_Message($subject))
            ->setFrom([$Settings->getSettings("smtp_from_mail") => $replyName])
            ->setTo([$email])
            ->setReplyTo($replyAddress, $replyName)
            ->setBody($message)
            ->setContentType("text/html");

        // Send the message
        $result = $mailer->send($messageM);
    }
}
