<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;

class loadBookChanger
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
                $stmt = $this->db->prepare("SELECT * FROM books WHERE isbn=?");
                $stmt->bind_param("s", $_data["isbn"]);
                $stmt->execute();

                $obj = $stmt->get_result()->fetch_object();

                $stmt = $this->db->prepare("SELECT * FROM thumbnails WHERE isbn=?");
                $stmt->bind_param("s", $_data["isbn"]);
                $stmt->execute();

                $thumbnail = $stmt->get_result()->fetch_object();

                $html = '<div class="row">
                <div class="col">
                  <div class="form-floating custom-form-floating form-group mb-3">
                    <input type="text" class="form-control" id="title_change" placeholder="Titel" value="' . $obj->title . '">
                    <label for="title_change">Titel</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-floating custom-form-floating form-group mb-3">
                    <input type="text" class="form-control" id="subtitle_change" placeholder="Untertitel" value="' . $obj->subtitle . '">
                    <label for="subtitle_change">Untertitel</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-floating custom-form-floating form-group mb-3">
                    <input type="text" class="form-control" id="publisher_change" placeholder="Verlag" value="' . $obj->publisher . '">
                    <label for="publisher_change">Verlag</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="form-floating custom-form-floating form-group mb-3">
                    <input type="text" class="form-control date_flatpicker" id="publish_change" placeholder="Veröffentlichung" value="' . $obj->publish_date . '">
                    <label for="publish_change">Veröffentlichung</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-floating custom-form-floating form-group mb-3">
                    <input type="number" class="form-control" id="pages_change" placeholder="Seiten" value="' . $obj->page_number . '">
                    <label for="pages_change">Seiten</label>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Autoren</span>
                <div class="tags-input form-control tag-bg-primary" id="authors_i_change" data-id="authors_change" data-name="authors_change"></div>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Genres</span>
                <div class="tags-input form-control tag-bg-primary" id="genres_i_change" data-id="genres_change" data-name="genres_change"></div>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Beschreibung</span>
                <textarea class="form-control" aria-label="Beschreibung" id="description_change">' . $obj->description . '</textarea>
              </div>
              <input type="thumbnail" class="filepond" id="thumbnail_change" data-max-files="1" />

              <button type="button" class="btn btn-soft-success mt-2 w-100" onclick="changeBook(\'' . $_data["isbn"] . '\')">Buch ändern</button>';

                $this->generateExecutionTime();
                return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Informationen geladen!"), array("html" => $html, "authors" => base64_encode($obj->authors), "genres" => base64_encode($obj->genres), "thumbnail" => $thumbnail->image), $this->execution_time);
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
