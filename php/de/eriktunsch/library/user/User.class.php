<?php

namespace de\eriktunsch\library\user;

use \de\eriktunsch\library\user\Login;
use de\eriktunsch\library\utils\Variable;
use LdapRecord\Container;
use LdapRecord\Connection;
use LdapRecord\Models\Entry;
use mysqli;

class User
{
    private $username;
    private $id;
    private $firstname;
    private $surname;
    private $db;
    private $Variable;
    private $isAdmin;
    public $error;

    public function __construct($id = "")
    {
        $this->Variable = new Variable();
        $this->db = new mysqli($this->Variable->getGlobalVar("dbhost"), $this->Variable->getGlobalVar("dbuser"), $this->Variable->getGlobalVar("dbpass"), $this->Variable->getGlobalVar("dbdb"));

        if ($id == "") {
            $id = $_SESSION["username"];
        }
        if ($id != null && $id != "") {
            $this->id = $id;

            $connection = new Connection([
                'hosts' => ['192.168.1.112'],
                'port' => 389,
                'base_dn' => 'dc=humboldt-makerspace,dc=de',
                'username' => 'cn=server-login,ou=users,dc=humboldt-makerspace,dc=de',
                'password' => 'boswteq6kt#THF7YoDoLK9@4**vvd$L',
            ]);

            // Add the connection into the container:
            Container::addConnection($connection);

            $query = $connection->query();
            $query->where('cn', '=', $id);
            $query->select(['sn', 'givenName', 'cn']);
            $query->limit(0);
            $query->in("ou=users,dc=humboldt-makerspace,dc=de");
            $query->whereMemberOf('cn=library-admin,ou=groups,dc=humboldt-makerspace,dc=de');

            $first = $query->first();

            $query2 = $connection->query();
            $query2->where('cn', '=', $id);
            $query2->select(['sn', 'givenName', 'cn']);
            $query2->limit(0);
            $query2->in("ou=users,dc=humboldt-makerspace,dc=de");

            $first2 = $query2->first();

            if ($first) {
                $this->isAdmin = true;
                $this->username = $first["cn"][0];
                $this->firstname = $first["givenname"][0];
                $this->surname = $first["sn"][0];
                $this->error = false;
            } elseif ($first2) {
                $this->isAdmin = false;
                $this->username = $first2["cn"][0];
                $this->firstname = $first2["givenname"][0];
                $this->surname = $first2["sn"][0];
                $this->error = false;
            } else {
                $this->error = true;
            }

            $stmt = $this->db->prepare("SELECT * FROM wallet WHERE uid=?");
            $stmt->bind_param("s", $this->id);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows == 0) {
                $stmt = $this->db->prepare("INSERT INTO wallet (uid, balance) VALUES (?, 0)");
                $stmt->bind_param("s", $this->id);
                $stmt->execute();
            }
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

    public function getFirstName()
    {
        return $this->firstname;
    }

    public function getSurname()
    {
        return $this->surname;
    }

    public function isAdmin()
    {
        return $this->isAdmin;
    }

    public function getBalance()
    {
        $stmt = $this->db->prepare("SELECT * FROM wallet WHERE uid=?");
        $stmt->bind_param("s", $this->id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_object()->balance;
    }
}
