<?php

namespace de\eriktunsch\library\utils\html;

class InformationContainer
{
    public function printInformationContainerHead($name)
    {
        return "<div class='profile-info-row'><div class='profile-info-name'>$name</div><div class='profile-info-value'>";
    }
    public function printInformationContainerFooter()
    {
        return "</div></div>";
    }
}
