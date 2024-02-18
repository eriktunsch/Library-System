<?php

namespace de\eriktunsch\basket\rest;

class Responses
{
    public function AccessDenied()
    {
        return array("typ" => "error", "message" => "Access Denied!");
    }

    public function PermissionDenied()
    {
        return array("typ" => "error", "message" => "You do not have the required permissions!");
    }
    
    public function RateLimit()
    {
        return array("typ" => "error", "message" => "Please wait a moment!");
    }

    public function InvalidRequest()
    {
        return array("typ" => "error", "message" => "This query does not exist!");
    }

    public function notAllParameters()
    {
        return array("typ" => "error", "message" => "Not all parameters are filled in!");
    }
    
    public function ownResponse($typ, $message)
    {
        return array("typ" => $typ, "message" => $message);
    }

    public function noResponse()
    {
        return array();
    }
}
