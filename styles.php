<?php
header("Cache-Control: max-age=31536000");
header('Content-type: text/css');
if (file_exists("php/cache/minifier/css/" . str_replace("/", "_", str_replace("..", "", base64_decode($_GET["style"]))))) {
    echo file_get_contents("php/cache/minifier/css/" . str_replace("/", "_", str_replace("..", "", base64_decode($_GET["style"]))));
} else {
    $css = file_get_contents("css/" . str_replace("..", "", base64_decode($_GET["style"])));

    $minifiedCode = preg_replace("/\s{2,}/", " ", $css);
    $minifiedCode = str_replace("\n", "", $minifiedCode);
    $minifiedCode = str_replace(', ', ",", $minifiedCode);

    file_put_contents("php/cache/minifier/css/" . str_replace("/", "_", str_replace("..", "", base64_decode($_GET["style"]))), $minifiedCode);

    echo $minifiedCode;
}
