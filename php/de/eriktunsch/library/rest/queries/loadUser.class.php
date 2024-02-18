<?php

namespace de\eriktunsch\basket\rest\queries;

use \de\eriktunsch\basket\rest\Responses;
use \de\eriktunsch\basket\rest\ResponseGenerator;
use \de\eriktunsch\basket\utils\Variable;
use mysqli;
use de\eriktunsch\basket\user\User;
use de\eriktunsch\basket\utils\StringUtils;

class loadUser
{
    private $db;
    private $ResponseGenerator;
    private $Responses;
    private $Variable;

    private $execution_time;

    public function __construct()
    {
        $this->Responses = new Responses();
        $this->ResponseGenerator = new ResponseGenerator();
        $this->Variable = new Variable();

        $this->db = new mysqli($this->Variable->getGlobalVar("dbhost"), $this->Variable->getGlobalVar("dbuser"), $this->Variable->getGlobalVar("dbpass"), $this->Variable->getGlobalVar("dbdb"));
    }

    public function execute($_data)
    {
        if ($_data["token"] != "" && isset($_data["token"])) {
            $stmt = $this->db->prepare("SELECT * FROM tokens WHERE token=?");
            $stmt->bind_param("s", $_data["token"]);
            $stmt->execute();

            $result = $stmt->get_result();

            if ($result->num_rows != 0) {

                $user = new User($result->fetch_object()->user);

                if ($user->error == false) {

                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Nutzer geladen!"), array("balance" => $user->getBalance(), "name" => $user->getFirstName() . " " . $user->getSurname(), "username" => $user->getUsername()), $this->execution_time);
                } else {
                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->AccessDenied(), array(), $this->execution_time);
                }
            } else {
                $this->generateExecutionTime();
                return $this->ResponseGenerator->GenerateResponse($this->Responses->AccessDenied(), array(), $this->execution_time);
            }
        } else {
            $this->generateExecutionTime();
            return $this->ResponseGenerator->GenerateResponse($this->Responses->notAllParameters(), array(), $this->execution_time);
        }
    }

    private function generateExecutionTime()
    {
        $this->execution_time = round(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"], 4);
    }
}
