<?php

namespace de\eriktunsch\basket\utils;

class Variable
{
    public function getGlobalVar($var)
    {
        global ${$var};
        
        return ${$var};
    }
}
