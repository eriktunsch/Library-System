<?php
//RUN EVERY 5 DAYS
use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\Notification;

include('../server.php');

$Notification = new Notification();

$stmt = $db->query('SELECT * FROM rents WHERE returned IS NULL');

while (($obj = $stmt->fetch_object()) != null) {
    $tempUser = new User($obj->user);

    $book_stmt = $db->prepare('SELECT * FROM books WHERE isbn=?');
    $book_stmt->bind_param("s", $obj->isbn);
    $book_stmt->execute();
    $res = $book_stmt->get_result();
    $book = $res->fetch_object();

    $Notification->sendEmail(array($tempUser->getMail()), "Buch überfällig", "Bitte bringe das Buch \"" . $book->title . "\" zeitnah zurück!");
}
