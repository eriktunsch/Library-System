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
    $table = 'books';

    // Table's primary key 
    $primaryKey = 'isbn';

    // Array of database columns which should be read and sent back to DataTables. 
    // The `db` parameter represents the column name in the database.  
    // The `dt` parameter represents the DataTables column identifier. 
    $columns = array(
        array(
            'db'        => 'isbn',
            'dt'        => 0,
            'formatter' => function ($d, $row) {
                global $db;
                $stmt = $db->prepare('SELECT id FROM rents WHERE isbn=? AND returned=NULL');
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
            'db'        => 'title',
            'dt'        => 1,
            'formatter' => function ($d, $row) {
                if ($row["subtitle"] != "") {
                    return $d . "<br><i>" . $row["subtitle"] . "</i>";
                } else {
                    return $d;
                }
            }
        ),
        array(
            'db'        => 'genres',
            'dt'        => 2,
            'formatter' => function ($d, $row) {
                $returner = "";
                $array = json_decode($d, true);
                for ($i = 0; $i < count($array); $i++) {
                    $returner .= '<span class="badge bg-primary mx-1"> ' . $array[$i] . ' </span><br>';
                }

                return $returner;
            }
        ),
        array(
            'db'        => 'authors',
            'dt'        => 3,
            'formatter' => function ($d, $row) {
                $returner = "";
                $array = json_decode($d, true);
                for ($i = 0; $i < count($array); $i++) {
                    $returner .= '<span class="badge bg-primary mx-1"> ' . $array[$i] . ' </span><br>';
                }

                return $returner;
            }
        ),
        array('db' => 'publisher',  'dt' => 4),
        array(
            'db'        => 'isbn',
            'dt'        => 5,
            'formatter' => function ($d, $row) {
                return '<button class="btn btn-outline-warning btn-sm btn-rounded z-depth-0 mt-2 waves-effect" type="button" onclick="loadChanger(\'' . $d . '\');openModal(\'changer\');">Change</button><button class="btn btn-outline-danger btn-sm btn-rounded z-depth-0 mt-2 waves-effect" type="button" onclick="deleteItem(\'' . $d . '\')">Delete</button>';
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
