<?php 

include ('../server.php');

$genres = array();

$stmt = $db->query('SELECT genres FROM books');

while (($obj = $stmt->fetch_object()) != null) {
  $json = json_decode($obj->genres, true);
  for ($i = 0; $i < count($json); $i++) {
    if (!in_array($json[$i], $genres)) {
      array_push($genres, $json[$i]);
    }
  }
}

echo json_encode($genres);