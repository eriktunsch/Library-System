<?php

namespace de\eriktunsch\basket\utils\html;

use \de\eriktunsch\basket\utils\Settings;

class Headline
{
    private $Settings;

    public function __construct()
    {
        $this->Settings = new Settings();
    }

    public function printHeadline($title)
    {
        return '<h1 class="cd-headline loading-bar" style="text-align: center; color: white !important">
            <span class="cd-words-wrapper">
              <b class="is-visible">' . $title . '</b>
              <b>'.$this->Settings->getSettings("html_title").'</b>
            </span>
          </h1>';
    }
}
