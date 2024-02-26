<?php

namespace de\eriktunsch\library\user;

use de\eriktunsch\library\utils\MysqlConnector;
use de\eriktunsch\library\utils\Variable;

class User
{
    private $username;
    private $id;
    private $name;
    private $mail;
    private $newsletter;
    private $disabled;
    private $error;

    public function __construct($username = "")
    {
        $Variable = new Variable();
        $db = (new MysqlConnector())->getConnection($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));

        if ($username == "") {
            $username = $_SESSION["username"];
            $this->username = $username;
        }
        
        $stmt = $db->prepare("SELECT * FROM users WHERE username=? LIMIT 1");
        $stmt->bind_param("s", $this->username);
        $stmt->execute();

        $res = $stmt->get_result();

        if ($res->num_rows == 0) {
            $this->error = true;
            return;
        } else {
            $obj = $res->fetch_object();

            $this->name = $obj->name;
            $this->mail = $obj->mail;
            $this->newsletter = $obj->newsletter;
            $this->disabled = $obj->disabled;
            $this->id = $obj->id;
        }
    }


    public function getUsername()
    {
        return $this->username;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getMail()
    {
        return $this->mail;
    }

    public function isNewsletter()
    {
        return $this->newsletter;
    }

    public function isDisabled()
    {
        return $this->disabled;
    }

    public function getName()
    {
        return $this->name;
    }

    public function isAdmin()
    {
        return $_SESSION["isAdmin"];
    }

    public function isError() {
        return $this->error;
    }
}
