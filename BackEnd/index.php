<?php

header("Access-Control-Allow-Origin: *");
$thingsToDo = file_get_contents(__DIR__ . '/db.json');

header('Content-Type: application/json');
echo $thingsToDo;

//BONUS (NON CORRETTO, DA AGGIUSTARE)
//if($thingsToDo == false){
//    echo 'No, già fatto';
//}
//else{
//    echo $thingsToDo;
//}

?>