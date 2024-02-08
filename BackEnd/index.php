<?php

header("Access-Control-Allow-Origin: *");
$population = file_get_contents(__DIR__ . '/db.json');

header('Content-Type: application/json');
echo $population;

?>