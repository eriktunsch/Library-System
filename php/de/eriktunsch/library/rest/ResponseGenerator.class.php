<?php

namespace de\eriktunsch\basket\rest;

use \de\eriktunsch\basket\utils\ServerUsage;

class ResponseGenerator
{
    public function GenerateResponse($Response = array("typ" => "warning", "message" => "No message has been defined!"), $data = array(), $execution_time = 0)
    {
        $ServerUsage = new ServerUsage;
        $returner = array();

        $returner["response"] = $Response;
        $returner["data"] = $data;
        $returner["debug"] = array();
        $returner["debug"]["execution_time"] = $execution_time;
        $returner["debug"]["cpu_usage"] = round($ServerUsage->get_server_cpu_usage(), 4);
        $returner["debug"]["disk_free_space"] = $ServerUsage->formatBytes(disk_free_space(__DIR__), 4);
        return json_encode($returner);
    }
}
