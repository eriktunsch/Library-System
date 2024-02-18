<?php

namespace de\eriktunsch\basket\rest\queries;

use \de\eriktunsch\basket\rest\Responses;
use \de\eriktunsch\basket\rest\ResponseGenerator;
use \de\eriktunsch\basket\utils\Variable;
use mysqli;
use de\eriktunsch\basket\user\User;

class loadBalancer
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
                $stmt = $this->db->prepare("SELECT * FROM items WHERE id=?");
                $stmt->bind_param("s", $_data["id"]);
                $stmt->execute();

                $obj = $stmt->get_result()->fetch_object();

                $html = '<form style="color: #757575; padding: 15px" id="balance_form">
                <div class="form-row mb-4">
                    <div class="col-md-12">
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-text-own" id="basic-addon1">Sum</span>
                            </div>
                            <input type="number" step="0.01" id="money_change" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="form-row mb-4">
                    <div class="col-md-6">
                        <div class="input-group mb-1">
                        <button class="btn btn-outline-danger btn-rounded btn-block z-depth-0 mt-2 waves-effect" type="button" onclick="takeMoney(\'' . $_data["id"] . '\');">Take</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                    <button class="btn btn-outline-success btn-rounded btn-block z-depth-0 mt-2 waves-effect" type="button" onclick="giveMoney(\'' . $_data["id"] . '\');">Give</button>

                    </div>
                </div>
        </form>';

                $this->generateExecutionTime();
                return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Balancer loaded!"), array("html" => $html), $this->execution_time);
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
