<?php

namespace de\eriktunsch\library\utils;

use mysqli;

class MysqlConnector
{
    public static $connections = array();

    public function getConnection($dbhost, $dbuser, $dbpass, $dbdb)
    {
        $LoadRessource = new LoadResource();
        $identifier = base64_encode($dbhost . $dbuser . $dbpass . $dbdb);
        if (!isset(self::$connections[$identifier])) {

            $con = mysqli_init();
            if (!$con) {
                error_log("mysqli_init failed");
            }

            $con->options(MYSQLI_OPT_CONNECT_TIMEOUT, 10);
            $con->options(MYSQLI_REPORT_STRICT, true);

            $con->options(MYSQLI_READ_DEFAULT_FILE, "myfile.cnf");
            try {
            $test2 = $con->real_connect($dbhost, $dbuser, $dbpass, $dbdb);
            $test = $con;
            self::$connections[$identifier] = $test;
            } catch (\Throwable $th) {
                self::$connections[$identifier] = false;
                echo $LoadRessource->insertJS("intern/error.js", true);
                echo "<script>window.error_html = '" . base64_encode(preg_replace("/\r|\n/", "", str_replace("{{error}}", "Keine Datenbank Verbindung", file_get_contents("/php/html/error.html")))) . "'</script>";
                die;
            }
        }
        return self::$connections[$identifier];
    }

    public function testAllConnections($array = array())
    {
        $test = true;
        for ($i = 0; $i < count($array); $i++) {
            $dbhost1 = "dbhost" . $array[$i];
            $dbuser1 = "dbuser" . $array[$i];
            $dbpass1 = "dbpass" . $array[$i];
            $dbdb1 = "dbdb" . $array[$i];
            global ${$dbhost1}, ${$dbuser1}, ${$dbpass1}, ${$dbdb1};

            if (!$this->getConnection(${$dbhost1}, ${$dbuser1}, ${$dbpass1}, ${$dbdb1})) {
                $test = false;
                error_log(json_encode(array(${$dbhost1}, ${$dbuser1}, ${$dbpass1}, ${$dbdb1})));
            }
        }

        return $test;
    }
}
