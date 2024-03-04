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
    $table = 'users';

    // Table's primary key 
    $primaryKey = 'id';

    // Array of database columns which should be read and sent back to DataTables. 
    // The `db` parameter represents the column name in the database.  
    // The `dt` parameter represents the DataTables column identifier. 
    $columns = array(
        array(
            'db'        => 'disabled',
            'dt'        => 0,
            'formatter' => function ($d, $row) {
                if ($d == 0) {
                    return '<i class="text-success fa-regular fa-circle-check"></i> Ausleihung möglich';
                } elseif ($d == 1) {
                    return '<i class="text-danger fa-regular fa-circle-xmark"></i> Ausleihung gesperrt (automatisch)';
                } elseif ($d == 2) {
                    return '<i class="text-danger fa-regular fa-circle-xmark"></i> Ausleihung gesperrt';
                }
            }
        ),
        array('db' => 'username',  'dt' => 1),
        array('db' => 'name',  'dt' => 2),
        array('db' => 'mail',  'dt' => 3),
        array(
            'db'        => 'newsletter',
            'dt'        => 4,
            'formatter' => function ($d, $row) {
                if ($d == 1) {
                    return '<i class="text-success fa-regular fa-circle-check"></i> abonniert';
                } else {
                    return '<i class="text-danger fa-regular fa-circle-xmark"></i> nicht abonniert';
                }
            }
        ),
        array(
            'db'        => 'id',
            'dt'        => 5,
            'formatter' => function ($d, $row) {
                if ($row["disabled"] == 2) {
                    return '<button class="btn btn-soft-success btn-sm btn-rounded z-depth-0 waves-effect" type="button" onclick="freeUser(\'' . $d . '\');">Ausleihung freigeben</button>';
                } else {
                    return '<button class="btn btn-soft-danger btn-sm btn-rounded z-depth-0 waves-effect" type="button" onclick="disableUser(\'' . $d . '\');">Ausleihung sperren</button>';
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
