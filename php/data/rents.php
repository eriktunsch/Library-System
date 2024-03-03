<?php
require '../server.php';

use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;

if (!$Login->isLoggedin()) {
    $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
    die;
}
if ($User->isAdmin()) {
    $db = (new MysqlConnector())->getConnection($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
    // Database connection info 
    $dbDetails = array(
        'host' => $Variable->getGlobalVar("dbhost"),
        'user' => $Variable->getGlobalVar("dbuser"),
        'pass' => $Variable->getGlobalVar("dbpass"),
        'db'   => $Variable->getGlobalVar("dbdb")
    );

    // DB table to use 
    $table = 'rents';

    // Table's primary key 
    $primaryKey = 'id';

    $users = array();

    $stmt = $db->query("SELECT id,name FROM users");

    while (($result = $stmt->fetch_object()) != null) {
        $users[$result->id] = $result->name;
    }

    $books = array();

    $stmt = $db->query("SELECT isbn,title,subtitle FROM books");

    while (($result = $stmt->fetch_object()) != null) {
        if ($result->subtitle != "") {
            $books[$result->isbn] = $result->title . "<br><i>" . $result->subtitle . "</i>";
        } else {
            $books[$result->isbn] = $result->title;
        }
    }
    // Array of database columns which should be read and sent back to DataTables. 
    // The `db` parameter represents the column name in the database.  
    // The `dt` parameter represents the DataTables column identifier. 
    $columns = array(
        array(
            'db'        => 'returned',
            'dt'        => 0,
            'formatter' => function ($d, $row) {
                if ($d != NULL) {
                    return '<i class="text-success fa-regular fa-circle-check"></i> ' . date("d.m.Y, H:i", strtotime($d));
                } else {
                    return '<i class="text-danger fa-regular fa-circle-xmark"></i>';
                }
            }
        ),
        array(
            'db'        => 'isbn',
            'dt'        => 1,
            'formatter' => function ($d, $row) {
                global $books;
                return $books[$d];
            }
        ),
        array(
            'db'        => 'user',
            'dt'        => 2,
            'formatter' => function ($d, $row) {
                global $users;
                return $users[$d];
            }
        ),
        array(
            'db'        => 'start',
            'dt'        => 3,
            'formatter' => function ($d, $row) {
                return date("d.m.Y, H:i", strtotime($d));
            }
        ),
        array(
            'db'        => 'start',
            'dt'        => 4,
            'formatter' => function ($d, $row) {
                $date = new DateTime($d);
                $date->modify('+14 day');
                if (new DateTime() > $date) {
                    return "<span class='text-danger'>" . $date->format('d.m.Y') . "</span>";
                } else {
                    return "<span>" . $date->format('d.m.Y') . "</span>";
                }
            }
        ),
        array(
            'db'        => 'id',
            'dt'        => 5,
            'formatter' => function ($d, $row) {
                if ($row["returned"] == NULL) {
                    return '<button class="btn btn-soft-warning btn-sm btn-rounded z-depth-0 mt-2 waves-effect" type="button" onclick="returnBook(\'' . $d . '\');">zurückgegeben</button>';
                } else {
                    return '';
                }
            }
        ),
    );

    // Include SQL query processing class 
    require '../lib/datatables/ssp.class.php';
    // Output data as json format 
    echo json_encode(
        SSP::complex($_GET, $dbDetails, $table, $primaryKey, $columns)
    );
}
