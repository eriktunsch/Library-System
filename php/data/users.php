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
        array(
            'db'        => 'username',
            'dt'        => 1,
            'formatter' => function ($d, $row) {
                return '<a class="icon-link icon-link-hover" href="/profile/?u=' . $d . '">' . $d . '   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
              </svg></a>';
            }
        ),
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
