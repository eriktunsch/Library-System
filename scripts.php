<?php
header("Cache-Control: max-age=0");
header('Content-type: text/javascript');
include('php/lib/JShrink/Minifier.php');
if (file_exists("php/cache/minifier/js/" . str_replace("/", "_", str_replace("..", "", base64_decode($_GET["script"]))))) {
    echo file_get_contents("php/cache/minifier/js/" . str_replace("/", "_", str_replace("..", "", base64_decode($_GET["script"]))));
} else {
    try {
        $js = file_get_contents("js/" . str_replace("..", "", base64_decode($_GET["script"])));
        $minifiedCode = \JShrink\Minifier::minify($js, array('flaggedComments' => false));

        file_put_contents("php/cache/minifier/js/" . str_replace("/", "_", str_replace("..", "", base64_decode($_GET["script"]))), $minifiedCode);

        echo $minifiedCode;
    } catch (Exception $e) {
        echo file_get_contents("js/" . str_replace("..", "", base64_decode($_GET["script"])));
    }
}
