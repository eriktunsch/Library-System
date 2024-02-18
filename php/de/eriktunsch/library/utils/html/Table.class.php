<?php

namespace de\eriktunsch\library\utils\html;

class Table
{
    public function printTableFooter()
    {
        $returner = "</tbody></table>";
        return $returner;
    }

    public function printTableHead($id, array $columns)
    {
        $returner = "
        <table class='table table-hover' id='$id' style='width:100%'>
          <thead>
            <tr>";
        for ($i = 0; $i < count($columns); $i++) {
            $returner .= "<th>$columns[$i]</th>";
        }

        $returner .= "</tr>
          </thead>
          <tbody>";
        return $returner;
    }
}
