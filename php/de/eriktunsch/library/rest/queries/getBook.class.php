<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use mysqli;
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;

class getBook
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
        if ($this->User->isAdmin()) {
            if ($_data["isbn"] != "" && isset($_data["isbn"])) {
                $json = json_decode(file_get_contents("https://www.googleapis.com/books/v1/volumes?q=isbn:" . $_data["isbn"]), true);

                $books = array();
                $html = "";

                if ($json["totalItems"] != 0) {

                    for ($i = 0; $i < count($json["items"]); $i++) {

                        if (isset($json["items"][$i]["volumeInfo"]["imageLinks"]["thumbnail"])) {
                            $imageUrl = $json["items"][$i]["volumeInfo"]["imageLinks"]["thumbnail"];
                            $imageData = file_get_contents($imageUrl);
                            $base64String = base64_encode($imageData);
                            $dataUri = "data:image/png;base64,{$base64String}";
                        } else {
                            $dataUri = "";
                        }

                        if (!isset($json["items"][$i]["volumeInfo"]["categories"])) {
                            $json["items"][$i]["volumeInfo"]["categories"] = array();
                        }

                        if (!isset($json["items"][$i]["volumeInfo"]["subtitle"])) {
                            $json["items"][$i]["volumeInfo"]["subtitle"] = "";
                        }

                        array_push($books, array(
                            "isbn" => $_data["isbn"],
                            "title" => $json["items"][$i]["volumeInfo"]["title"],
                            "subtitle" => $json["items"][$i]["volumeInfo"]["subtitle"],
                            "publish_date" => $json["items"][$i]["volumeInfo"]["publishedDate"],
                            "publishers" => $json["items"][$i]["volumeInfo"]["publisher"],
                            "description" => $json["items"][$i]["volumeInfo"]["description"],
                            "pages" => $json["items"][$i]["volumeInfo"]["pageCount"],
                            "thumbnail" => $dataUri
                        ));

                        $html .=
                            '<div class="col-sm"><div class="card card-dark" style="width: 18rem;"> 
                        <img src="' . $dataUri . '" class="card-img-top" alt="...">
                        <div class="card-body">   
                            <h5 class="card-title">' . $json["items"][$i]["volumeInfo"]["title"] . ' (' . $json["items"][$i]["volumeInfo"]["publishedDate"] . ')</h5>
                            <button type="button" class="btn btn-soft-primary mt-2 w-100" data-bs-dismiss="modal" type="button" onclick="selectBook(\'' . $_data["isbn"] . '\', 
                            \'' . base64_encode($json["items"][$i]["volumeInfo"]["title"]) . '\',
                            \'' . base64_encode($json["items"][$i]["volumeInfo"]["subtitle"]) . '\', 
                            \'' . base64_encode($json["items"][$i]["volumeInfo"]["publisher"]) . '\', 
                            \'' . base64_encode($json["items"][$i]["volumeInfo"]["description"]) . '\', 
                            \'' . $json["items"][$i]["volumeInfo"]["pageCount"] . '\', 
                            \'' . base64_encode($json["items"][$i]["volumeInfo"]["publishedDate"]) . '\',  
                            \'' . $dataUri . '\')">Buch wählen</button> 
                        </div>
                        </div></div>';
                    }

                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Die Buch-Infos wurden geladen!"), array("books" => $books, "html" => base64_encode($html)), $this->execution_time);
                } else {
                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("error", "Dieses Buch konnte nicht gefunden werden!"), array(), $this->execution_time);
                }
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
