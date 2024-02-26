<?php
namespace de\eriktunsch\library\rest\queries;

use \de\eriktunsch\library\rest\Responses;
use \de\eriktunsch\library\rest\ResponseGenerator;
use de\eriktunsch\library\utils\MysqlConnector;
use \de\eriktunsch\library\utils\Variable;
use mysqli;

class template
{
    private $db;
    private $ResponseGenerator;
    private $Responses;
    private $Variable;

    private $execution_time;

    public function __construct()
    {
        $this->Responses = new Responses();
        $this->ResponseGenerator = new ResponseGenerator();
        $this->Variable = new Variable();
    
        $db = (new MysqlConnector())->getConnection($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));    }

    public function execute($_data)
    {
        $this->generateExecutionTime();
        return $this->ResponseGenerator->GenerateResponse($this->Responses->ownResponse("success", "Test"), array(), $this->execution_time);
    }

    private function generateExecutionTime()
    {
        $this->execution_time = round(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"], 4);
    }
}
