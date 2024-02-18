<?php

namespace de\eriktunsch\basket\utils;

class ServerUsage
{
    public function get_server_cpu_usage()
    {
        $load = sys_getloadavg();
        return $load[0];
    }

    public function formatBytes($size, $precision = 2)
    {
        $base = log($size, 1024);
        $suffixes = array('', 'K', 'M', 'G', 'T');

        return round(pow(1024, $base - floor($base)), $precision) . ' ' . $suffixes[floor($base)];
    }
}
