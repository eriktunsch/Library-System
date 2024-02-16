<?php

namespace de\eriktunsch\library\utils;

class Variable
{
    public function getGlobalVar($var)
    {
        global ${$var};
        
        return ${$var};
    }
}
