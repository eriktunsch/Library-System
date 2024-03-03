<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;

class changeBook
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
            if (
                isset($_data["isbn"]) && $_data["isbn"] != ""
                && isset($_data["title"]) && $_data["title"] != ""
                && isset($_data["publisher"]) && $_data["publisher"] != ""
                && isset($_data["publish"]) && $_data["publish"] != ""
                && isset($_data["pages"]) && $_data["pages"] != ""
                && isset($_data["authors"]) && $_data["authors"] != ""
                && isset($_data["genres"]) && $_data["genres"] != ""
                && isset($_data["images"]) && $_data["images"] != ""
            ) {
                $test = $this->db->prepare("SELECT isbn FROM books WHERE isbn=?");
                $test->bind_param("s", $_data["isbn"]);
                $test->execute();
                if ($test->get_result()->num_rows != 0) {
                    $authors = json_encode(explode(",", str_replace(";", ",", $_data["authors"])));
                    $genres = json_encode(explode(",", str_replace(";", ",", $_data["genres"])));
                    $stmt = $this->db->prepare("UPDATE books SET title=?, authors=?, publish_date=?, page_number=?, publisher=?, description=?, subtitle=?, genres=? WHERE isbn=?");
                    $stmt->bind_param("sssssssss", $_data["title"], $authors, date("Y-m-d H:i:s", strtotime($_data["publish"])), $_data["pages"], $_data["publisher"], $_data["description"], $_data["subtitle"], $genres, $_data["isbn"]);
                    $stmt->execute();

                    $images = json_decode($_data["images"]);
                    $currImage = $images[0];
                    $stmt = $this->db->prepare("UPDATE thumbnails SET image=? WHERE isbn=?");
                    $stmt->bind_param("ss", $currImage, $_data["isbn"]);
                    $stmt->execute();

                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Das Buch wurde geändert!"), array(), $this->execution_time);
                } else {
                    $this->generateExecutionTime();
                    return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("error", "Das Buch existiert nicht!"), array(), $this->execution_time);
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
