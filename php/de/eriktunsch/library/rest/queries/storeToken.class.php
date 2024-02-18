<?php

namespace de\eriktunsch\basket\rest\queries;

use \de\eriktunsch\basket\rest\Responses;
use \de\eriktunsch\basket\rest\ResponseGenerator;
use \de\eriktunsch\basket\utils\Variable;
use mysqli;
use de\eriktunsch\basket\user\User;

class storeToken
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
            if ($_data["token"] != "" && isset($_data["token"]) && $_data["user"] != "" && isset($_data["user"])) {
                $stmt = $this->db->prepare("SELECT * FROM tokens WHERE `user`=?");
                $stmt->bind_param("s", $_data["user"]);
                $stmt->execute();

                if ($stmt->get_result()->num_rows == 0) {
                    $stmt = $this->db->prepare("INSERT INTO tokens (`user`, token) VALUES (?, ?)");
                    $stmt->bind_param("ss", $_data["user"], $_data["token"]);
                    $stmt->execute();
                } else {
                    $stmt = $this->db->prepare("UPDATE tokens SET token=? WHERE `user`=?");
                    $stmt->bind_param("ss", $_data["token"], $_data["user"]);
                    $stmt->execute();
                }

                $this->generateExecutionTime();
                return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Token saved!"), array(), $this->execution_time);
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
