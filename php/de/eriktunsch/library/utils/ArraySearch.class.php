<?php

namespace de\eriktunsch\basket\utils;

class ArraySearch
{
    public function look_for_array(array $array, $searchfor_value, $searchfor_name)
    {
        for ($iLook = 0; $iLook < count($array); $iLook++) {
            if ($array[$iLook][$searchfor_name] == $searchfor_value) {
                return $array[$iLook];
            }
        }
        
        return false;
    }
}
