<?php

namespace de\eriktunsch\basket\utils\html;

use \de\eriktunsch\basket\utils\Settings;

class Modal
{
    public function printModalFooter()
    {
        $Settings = new Settings();
        return $Settings->getSettings("modal_footer");
    }

    public function printModalHead($id, $title, $style = "")
    {
        $Settings = new Settings();
        return str_replace("{{id}}", $id, str_replace("{{style}}", $style, str_replace("{{title}}", $title, $Settings->getSettings("modal_head"))));
    }
}
