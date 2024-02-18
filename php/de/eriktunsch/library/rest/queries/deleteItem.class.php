<?php

namespace de\eriktunsch\basket\rest\queries;

use \de\eriktunsch\basket\rest\Responses;
use \de\eriktunsch\basket\rest\ResponseGenerator;
use \de\eriktunsch\basket\utils\Variable;
use mysqli;
use de\eriktunsch\basket\user\User;

class deleteItem
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
            if ($_data["id"] != "" && isset($_data["id"])) {
                    $stmt = $this->db->prepare("DELETE FROM items WHERE id=?");
                    $stmt->bind_param("s", $_data["id"]);
                    $stmt->execute();

                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "The item has been deleted!"), array(), $this->execution_time);

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
