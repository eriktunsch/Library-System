<?php 

include ('../server.php');

$publishers = array();

$stmt = $db->query('SELECT publisher FROM books');

while (($obj = $stmt->fetch_object()) != null) {
  if (!in_array($obj->publisher, $publishers)) {
    array_push($publishers, $obj->publisher);
  }
}

echo json_encode($publishers);