<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use mysqli;
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;

class removeBookmark
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

        $this->db = (new MysqlConnector())->getConnection($this->Variable->getGlobalVar("dbhost"), $this->Variable->getGlobalVar("dbuser"), $this->Variable->getGlobalVar("dbpass"), $this->Variable->getGlobalVar("dbdb"));
    }

    public function execute($_data)
    {
            if (
                isset($_data["book"]) && $_data["book"] != "" &&
                isset($_data["user"]) && $_data["user"] != ""
            ) {
                if ($_data["user"] == $this->User->getId() || $this->User->isAdmin()) {

                    $stmt = $this->db->prepare("DELETE FROM bookmarks WHERE `user`=? AND book=?");
                    $stmt->bind_param("ss", $_data["user"], $_data["book"]);
                    $stmt->execute();

                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Das Buch wurde von der Merkliste entfernt!"), array(), $this->execution_time);
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
