<?php
require '../server.php';

use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\MysqlConnector;

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

$marks = array();
$userID = $User->getId();

$stmt = $db->prepare("SELECT book FROM bookmarks WHERE `user`=?");
$stmt->bind_param("s", $userID);
$stmt->execute();

$res = $stmt->get_result();

while (($result = $res->fetch_object()) != null) {
        array_push($marks, $result->book);
}

// Array of database columns which should be read and sent back to DataTables. 
// The `db` parameter represents the column name in the database.  
// The `dt` parameter represents the DataTables column identifier. 
$columns = array(
    array(
        'db'        => 'isbn',
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
            global $Login, $marks, $User;
            if ($Login->isLoggedin() && !in_array($d, $marks)) {
                return '<button class="btn btn-soft-success btn-sm btn-rounded z-depth-0 waves-effect" type="button" onclick="setMark(\'' . $d . '\');">zur Merkliste</button>';
            } elseif ($Login->isLoggedin()) {
                return '<button class="btn btn-soft-danger btn-sm btn-rounded z-depth-0 waves-effect" type="button" onclick="removeMark(\'' . $User->getId() . '\', \'' . $d . '\');">von Merkliste entfernen</button>';
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
