<?php

namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use \de\eriktunsch\library\utils\Variable;
use mysqli;
use de\eriktunsch\library\user\User;

class checkout
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
        if ($_data["cart"] != "" && isset($_data["cart"])  && $_data["token"] != "" && isset($_data["token"])) {
            if (count(json_decode($_data["cart"], true)) != 0) {
                $stmt = $this->db->prepare("SELECT * FROM tokens WHERE token=?");
                $stmt->bind_param("s", $_data["token"]);
                $stmt->execute();

                $result = $stmt->get_result();

                if ($result->num_rows != 0) {

                    $user = new User($result->fetch_object()->user);

                    if ($user->error == false) {
                        $cart = json_decode($_data["cart"], true);
                        $items = array_count_values($cart);

                        $sum = 0;

                        foreach ($items as $key => $value) {
                            $stmt = $this->db->prepare("SELECT * FROM items WHERE ean=?");
                            $stmt->bind_param("s", $key);
                            $stmt->execute();

                            $sum += ($value * $stmt->get_result()->fetch_object()->price);
                        }

                        if ($sum <= $user->getBalance()) {

                            foreach ($items as $key => $value) {
                                $stmt = $this->db->prepare("SELECT * FROM items WHERE ean=?");
                                $stmt->bind_param("s", $key);
                                $stmt->execute();

                                $item = $stmt->get_result()->fetch_object();

                                $name = $item->name;
                                $price = $item->price;
                                $picture = $item->picture;

                                $stmt = $this->db->prepare("INSERT INTO history (name, price, amount, `user`, picture) VALUES (?, ?, ?, ?, ?)");
                                $stmt->bind_param("sssss", $name, $price, $value, $user->getUsername(), $picture);
                                $stmt->execute();
                            }

                            $newBalance = (float)number_format((float)$user->getBalance(), 2, '.', '') - (float)number_format((float)$sum, 2, '.', '');

                            $stmt = $this->db->prepare("UPDATE wallet SET balance=? WHERE uid=?");
                            $stmt->bind_param("ss", $newBalance, $user->getUsername());
                            $stmt->execute();

                            $this->generateExecutionTime();
                            return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Der Kauf wurde getätigt!"), array("balance" => $newBalance), $this->execution_time);
                        } else {
                            $this->generateExecutionTime();
                            return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("error", "Dein Guthaben hat das Dispo-Limit erreicht! Bitte lade dein Konto auf!"), array(), $this->execution_time);
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
                return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("error", "Dein Einkaufskorb ist leer!"), array(), $this->execution_time);
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
