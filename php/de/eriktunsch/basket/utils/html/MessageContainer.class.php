<?php

namespace de\eriktunsch\library\utils\html;

class MessageContainer
{
    public function displayMessageContainer($message, $color, $big = false, $no_placeholder = false)
    {
        $returner = "";
        if (!$no_placeholder) {
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
        }
        $returner .= "<div style='text-align: center!important;'>";
        if ($big) {
            $returner .= "<h1>";
        }
        if ($no_placeholder) {
            $returner .= "<p class='$color-color badge auto-style99' style='position: absolute; top: 50%;left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);'>$message</p>";
        } else {
            $returner .= "<p class='$color-color badge auto-style99'>$message</p>";
        }
        if ($big) {
            $returner .= "</h1>";
        }
        $returner .= "</div>";
        if (!$no_placeholder) {
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
            $returner .= "<br>";
        }
        return $returner;
    }
}
