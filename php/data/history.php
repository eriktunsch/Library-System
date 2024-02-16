<?php
require '../server.php';

use de\eriktunsch\library\user\User;

if (!$Login->isLoggedin()) {
    $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
    die;
}
    $db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));

    // Database connection info 
    $dbDetails = array(
        'host' => $Variable->getGlobalVar("dbhost"),
        'user' => $Variable->getGlobalVar("dbuser"),
        'pass' => $Variable->getGlobalVar("dbpass"),
        'db'   => $Variable->getGlobalVar("dbdb")
    );

    // DB table to use 
    $table = 'history';

    // Table's primary key 
    $primaryKey = 'id';

    $where = "user='" . $_SESSION["username"] . "'";

    // Array of database columns which should be read and sent back to DataTables. 
    // The `db` parameter represents the column name in the database.  
    // The `dt` parameter represents the DataTables column identifier. 
    $columns = array(
        array('db' => 'date',  'dt' => 0),
        array(
            'db'        => 'picture',
            'dt'        => 1,
            'formatter' => function ($d, $row) {
                return "<img class='w-2r bdrs-50p' style='height: 100px; border-radius:15px;' src='$d'></img>";
            }
        ),
        array('db' => 'name',  'dt' => 2),
        array(
            'db'        => 'price',
            'dt'        => 3,
            'formatter' => function ($d, $row) {
                return number_format((float)$d, 2, '.', '') . " Euro";
            }
        ),
        array('db' => 'amount',     'dt' => 4)
    );

    // Include SQL query processing class 
    require '../lib/datatables/ssp.class.php';

    // Output data as json format 
    echo json_encode(
        SSP::complex($_GET, $dbDetails, $table, $primaryKey, $columns, $where)
    );
    