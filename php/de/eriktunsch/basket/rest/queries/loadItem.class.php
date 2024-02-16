<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use mysqli;
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\StringUtils;

class loadItem
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
        if ($_data["id"] != "" && isset($_data["id"]) && $_data["token"] != "" && isset($_data["token"])) {
            $stmt = $this->db->prepare("SELECT * FROM tokens WHERE token=?");
            $stmt->bind_param("s", $_data["token"]);
            $stmt->execute();

            $result = $stmt->get_result();

            if ($result->num_rows != 0) {
                $user = new User($result->fetch_object()->user);

                if ($user->error == false) {
                    $stmt = $this->db->prepare("SELECT * FROM items WHERE ean=?");
                    $stmt->bind_param("s", $_data["id"]);
                    $stmt->execute();

                    $result = $stmt->get_result();

                    if ($result->num_rows != 0) {

                        $obj = $result->fetch_object();

                        $string = (new StringUtils)->randomString(10);

                        $html = '<div class="row" id="item_' . $string . '">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src="' . $obj->picture . '" style="max-height: 100px; width: auto" />
                        <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><b>' . $obj->name . '</b></p>
                    <p class="muted mt-4">EAN: ' . $obj->ean . '</p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" style="text-align:center">
                    <p class="text-start text-md-center">
                        <strong class="price">' . number_format((float)$obj->price, 2, '.', '') . ' Euro</strong>
                    </p>
                    <button type="button" class="btn btn-rounded btn-outline-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item" onclick="removeItem(' . $obj->ean . ', \'' . $string . '\');">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <hr class="my-4" id="line_' . $string . '" />';

                        $this->generateExecutionTime();
                        return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Item gescannt!"), array("html" => $html), $this->execution_time);
                    } else {
                        $this->generateExecutionTime();
                        return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("error", "Item nicht vorhanden!"), array("html" => ""), $this->execution_time);
                    }
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
