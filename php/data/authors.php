<?php 

include ('../server.php');

$authors = array();

$stmt = $db->query('SELECT authors FROM books');

while (($obj = $stmt->fetch_object()) != null) {
  $json = json_decode($obj->authors, true);
  for ($i = 0; $i < count($json); $i++) {
    if (!in_array($json[$i], $authors)) {
      array_push($authors, $json[$i]);
    }
  }
}

echo json_encode($authors);