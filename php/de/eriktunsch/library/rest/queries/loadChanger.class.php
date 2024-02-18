<?php

namespace de\eriktunsch\basket\rest\queries;

use \de\eriktunsch\basket\rest\Responses;
use \de\eriktunsch\basket\rest\ResponseGenerator;
use \de\eriktunsch\basket\utils\Variable;
use mysqli;
use de\eriktunsch\basket\user\User;

class loadChanger
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

                $html = '<form style="color: #757575; padding: 15px" id="change_form"><div class="form-row mb-4">
                    <div class="col-md-6">
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-text-own" id="basic-addon1">Name</span>
                            </div>
                            <input type="text" id="name_change" class="form-control" value="' . $obj->name . '">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-text-own" id="basic-addon1">Price</span>
                            </div>
                            <input type="number" step="0.01" id="price_change" class="form-control" value="' . $obj->price . '">
                        </div>
                    </div>
                </div>
                <div class="form-row mb-4">
                    <div class="col-md-6">
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-text-own" id="basic-addon1">EAN</span>
                            </div>
                            <input type="text" id="ean_change" class="form-control" value="' . $obj->ean . '">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-text-own" id="basic-addon1">Picture</span>
                            </div>
                            <input type="file" id="picture_change" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                <div class="col">
                    <button class="btn btn-outline-primary btn-rounded btn-block z-depth-0 mt-2 waves-effect" type="button" onclick="changeItem(' . $_data["id"] . ');">Change</button>
                </div>
            </div>
        </form>';

                $this->generateExecutionTime();
                return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Changer loaded!"), array("html" => $html), $this->execution_time);
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
