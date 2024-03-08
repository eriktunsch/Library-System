<?php

namespace de\eriktunsch\library\rest\queries;

use DateTime;
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
          $stmt = $this->db->prepare('INSERT INTO rents (`user`, isbn) VALUES (?, ?)');
          $stmt->bind_param("ss", $userid, $array[$i]);
          $stmt->execute();
        } else {
          $stmt = $this->db->prepare('UPDATE rents SET returned=current_timestamp() WHERE `user`=? AND isbn=? AND returned IS NULL');
          $stmt->bind_param("ss", $userid, $array[$i]);
          $stmt->execute();
        }
      }

      $disabled_check_stmt = $this->db->prepare('SELECT * FROM users WHERE id=?');
      $disabled_check_stmt->bind_param("s", $this->User->getId());
      $disabled_check_stmt->execute();

      $res = $disabled_check_stmt->get_result();
      if ($res->fetch_object()->disabled == 1) {
        $stmt = $this->db->prepare('SELECT id FROM rents WHERE `user`=?');
        $stmt->bind_param("s", $this->User->getId());
        $stmt->execute();
        $res = $stmt->get_result();

        $test = true;

        while (($obj = $res->fetch_object()) != null) {
          $date = new DateTime($obj->start);
          $date->modify('+20 day');

          if (strtotime($date->format('Y-m-d')) > time()) {
            $test = false;
            break;
          }
        }

        if ($test) {
          $stmt_disable = $this->db->prepare('UPDATE users SET disabled=0 WHERE id=?');
          $stmt_disable->bind_param("s", $obj->user);
          $stmt_disable->execute();
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
