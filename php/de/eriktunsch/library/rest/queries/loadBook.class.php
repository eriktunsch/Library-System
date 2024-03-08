<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use mysqli;
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;
use de\eriktunsch\library\utils\StringUtils;

class loadBook
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
    if ($_data["isbn"] != "" && isset($_data["isbn"])) {
      $stmt = $this->db->prepare("SELECT * FROM books WHERE isbn=?");
      $stmt->bind_param("s", $_data["isbn"]);
      $stmt->execute();

      $result = $stmt->get_result();

      if ($result->num_rows != 0) {

        $stmt2 = $this->db->prepare("SELECT * FROM thumbnails WHERE isbn=?");
        $stmt2->bind_param("s", $_data["isbn"]);
        $stmt2->execute();

        $result2 = $stmt2->get_result();

        $obj = $result->fetch_object();
        $thumbnail = $result2->fetch_object();

        $string = (new StringUtils)->randomString(10);

        $stmt = $this->db->prepare('SELECT id FROM rents WHERE isbn=? AND returned IS NULL');
        $stmt->bind_param("s", $_data["isbn"]);
        $stmt->execute();
        $res = $stmt->get_result()->num_rows;
        if ($res == 0) {
          if (!$this->User->isDisabled()) {
            $type = "rent";
            $html = '<div class="row" id="item_' . $string . '">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div class="bg-image mt-3 hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light" style="text-align: center">
                        <img src="data:image/png;base64,' . $thumbnail->image . '" style="max-height: 100px; width: auto" />
                        <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><b>' . $obj->title . '</b><br><i>' . $obj->subtitle . '</i></p>
                    <p class="muted mt-4">ISBN: ' . $obj->isbn . '</p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" style="text-align:center">
                    <p class="text-start text-md-center">
                        <strong>Ausleihe</strong>
                    </p>
                    <button type="button" class="btn btn-soft-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Entfernen" onclick="removeItem(' . $obj->isbn . ', \'' . $string . '\', \'' . $type . '\');">
                    <i class="fas fa-trash"></i>
                </button>
                </div>
            </div>
            <hr class="my-4" id="line_' . $string . '" />';
          } else {
            $this->generateExecutionTime();
            return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("error", "Bitte gebe erst deine überfälligen Bücher zurück!"), array(), $this->execution_time);
          }
        } else {
          $type = "return";
          $html = '<div class="row bg-danger bg-opacity-25" id="item_' . $string . '">
  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
      <div class="bg-image mt-3 hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light" style="text-align: center">
          <img src="data:image/png;base64,' . $thumbnail->image . '" style="max-height: 100px; width: auto" />
          <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
          </a>
      </div>
  </div>

  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
  <p><b>' . $obj->title . '</b><br><i>' . $obj->subtitle . '</i></p>
  <p class="muted mt-4">ISBN: ' . $obj->isbn . '</p>
  </div>

  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" style="text-align:center">
      <p class="text-start text-md-center">
          <strong>Rückgabe</strong>
      </p>
      <button type="button" class="btn btn-soft-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Entfernen" onclick="removeItem(' . $obj->isbn . ', \'' . $string . '\', \'' . $type . '\');">
          <i class="fas fa-trash"></i>
      </button>
  </div>
</div>
<hr class="my-4" id="line_' . $string . '" />';
        }

        $this->generateExecutionTime();
        return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Buch gescannt!"), array("html" => $html, "type" => $type), $this->execution_time);
      } else {
        $this->generateExecutionTime();
        return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("error", "Buch nicht vorhanden!"), array("html" => ""), $this->execution_time);
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
