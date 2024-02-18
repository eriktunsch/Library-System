<?php

namespace de\eriktunsch\basket\rest\queries;

use \de\eriktunsch\basket\rest\Responses;
use \de\eriktunsch\basket\rest\ResponseGenerator;
use \de\eriktunsch\basket\utils\Variable;
use mysqli;
use de\eriktunsch\basket\user\User;

class changeItem
{
    private $db;
    private $ResponseGenerator;
    private $Responses;
    private $Variable;
    private $User;

    private $execution_time;

    public function __construct()
    {
        $this->Responses = new Responses();
        $this->ResponseGenerator = new ResponseGenerator();
        $this->Variable = new Variable();
        $this->User = new User();

        $this->db = new mysqli($this->Variable->getGlobalVar("dbhost"), $this->Variable->getGlobalVar("dbuser"), $this->Variable->getGlobalVar("dbpass"), $this->Variable->getGlobalVar("dbdb"));
    }

    public function execute($_data)
    {
        if ($this->User->isAdmin()) {
            if ($_data["name"] != "" && isset($_data["name"]) && $_data["price"] != "" && isset($_data["price"]) && $_data["ean"] != "" && isset($_data["ean"])) {
                if (isset($_data["picture"])) {
                    $stmt = $this->db->prepare("UPDATE items SET name=?, price=?, ean=?, picture=? WHERE id=?");
                    $stmt->bind_param("sssss", $_data["name"], $_data["price"], $_data["ean"], $_data["picture"], $_data["id"]);
                } else {
                    $stmt = $this->db->prepare("UPDATE items SET name=?, price=?, ean=? WHERE id=?");
                    $stmt->bind_param("ssss", $_data["name"], $_data["price"], $_data["ean"], $_data["id"]);
                }
                $stmt->execute();

                $this->generateExecutionTime();
                return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "The item has been changed!"), array(), $this->execution_time);
            } else {
                $this->generateExecutionTime();
                return $this->ResponseGenerator->GenerateResponse($this->Responses->notAllParameters(), array(), $this->execution_time);
            }
        } else {
            $this->generateExecutionTime();
            return $this->ResponseGenerator->GenerateResponse($this->Responses->PermissionDenied(), array(), $this->execution_time);
        }
    }

    private function generateExecutionTime()
    {
        $this->execution_time = round(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"], 4);
    }
}
