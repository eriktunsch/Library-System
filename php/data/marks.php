<?php
require '../server.php';

use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;

if (!$Login->isLoggedin()) {
    $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
    die;
}
    $db = (new MysqlConnector())->getConnection($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
    // Database connection info 
    $dbDetails = array(
        'host' => $Variable->getGlobalVar("dbhost"),
        'user' => $Variable->getGlobalVar("dbuser"),
        'pass' => $Variable->getGlobalVar("dbpass"),
        'db'   => $Variable->getGlobalVar("dbdb")
    );

    // DB table to use 
    $table = 'bookmarks';

    // Table's primary key 
    $primaryKey = 'id';

    $books = array();

    $stmt = $db->query("SELECT isbn,title,subtitle FROM books");

    while (($result = $stmt->fetch_object()) != null) {
        if ($result->subtitle != "") {
            $books[$result->isbn] = $result->title . "<br><i>" . $result->subtitle . "</i>";
        } else {
            $books[$result->isbn] = $result->title;
        }
    }

    if ($User->isAdmin()) {
        $where = "user=" . $_GET["user_id"];
    } else {
        $where = "user=" . $User->getId();
    }
    // Array of database columns which should be read and sent back to DataTables. 
    // The `db` parameter represents the column name in the database.  
    // The `dt` parameter represents the DataTables column identifier. 
    $columns = array(
        array(
            'db'        => 'book',
            'dt'        => 0,
            'formatter' => function ($d, $row) {
                global $db;
                $stmt = $db->prepare('SELECT id FROM rents WHERE isbn=? AND returned IS NULL');
                $stmt->bind_param("s", $d);
                $stmt->execute();
                $res = $stmt->get_result()->num_rows;
                if ($res == 0) {
                    return '<i class="text-success fa-regular fa-circle-check"></i> Verfügbar';
                } else {
                    return '<i class="text-danger fa-regular fa-circle-xmark"></i> nicht Verfügbar';
                }
            }
        ),
        array(
            'db'        => 'book',
            'dt'        => 1,
            'formatter' => function ($d, $row) {
                global $books;
                return $books[$d];
            }
        ),
        array(
            'db'        => 'added',
            'dt'        => 2,
            'formatter' => function ($d, $row) {
                return date("d.m.Y, H:i", strtotime($d));
            }
        ),
        array(
            'db'        => 'user',
            'dt'        => 3,
            'formatter' => function ($d, $row) {
                return '<button class="btn btn-soft-danger btn-sm btn-rounded z-depth-0 waves-effect" type="button" onclick="removeMark(\'' . $d . '\', \'' . $row["book"] . '\');">von Merkliste entfernen</button>';
            }
        )
    );

    // Include SQL query processing class 
    require '../lib/datatables/ssp.class.php';
    // Output data as json format 
    echo json_encode(
        SSP::complex($_GET, $dbDetails, $table, $primaryKey, $columns, "", $where)
    );
