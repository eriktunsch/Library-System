<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use mysqli;
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;
use de\eriktunsch\library\utils\StringUtils;

class checkout
{
  private $db;
  private $ResponseGenerator;
  private $Responses;
  private $User;
  private $Variable;

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
    if ($_data["cart"] != "" && isset($_data["cart"])) {
      $array = json_decode($_data["cart"], true);
      $userid = $this->User->getId();

      for ($i = 0; $i < count($array); $i++) {
        $stmt = $this->db->prepare('SELECT id FROM rents WHERE isbn=? AND returned IS NULL');
        $stmt->bind_param("s", $array[$i]);
        $stmt->execute();
        $res = $stmt->get_result()->num_rows;
        if ($res == 0) {
          $stmt = $this->db->prepare('INSERT INTO rents (`user`, book) VALUES (?, ?)');
          $stmt->bind_param("ss", $userid, $array[$i]);
          $stmt->execute();
        } else {
          $stmt = $this->db->prepare('UPDATE rents SET returned=current_timestamp() WHERE `user`=? AND book=? AND returned IS NULL');
          $stmt->bind_param("ss", $userid, $array[$i]);
          $stmt->execute();
        }
      }
      $this->generateExecutionTime();
      return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Die Bücher wurden erfolgreich ausgeliehen bzw. zurückgegeben!"), array(), $this->execution_time);
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
