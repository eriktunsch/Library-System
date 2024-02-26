<?php

namespace de\eriktunsch\library\utils\html;

class MessageContainer
{
    public function displayMessageContainer($color, $title, $text1 = "", $text2 = "")
    {
        return '<div class="bd-example">
        <div class="alert alert-' . $color . ' mb-0" role="alert">
            <h4 class="alert-heading mb-2">' . $title . '</h4>
            <p>' . $text1 . '</p>
            <p class="mb-0">' . $text2 . '</p>
        </div>
    </div>';
    }
}
