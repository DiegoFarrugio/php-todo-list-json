<?php

$allListJson = file_get_contents('db.json');
// Recupero tutti i dati attualmente esistenti (ocn file_get_contents)

$allList = json_decode($allListJson, true);
// traformo la stringa JSON (corrispondente ai todo attualmente esistenti) in array. Con il true mi diventa array associativo, con il false rimane oggetto.

$newList =[
    'list' => $_POST['list'],
    'done' => false
];
//Mi creo il nuovo Todo inserendo le chiavi che avevo inserito nel JSON

$allList[] = $newList;
//Aggiungo nell'array il nuovo todo


$newListJson = json_encode($allList);
// R-itrasformo l' array in una stringa Json

file_put_contents('db.json', $newListJson);
// Pusho tutto nel json, col primo argomento mi prende il file, col secondo indico cosa voglio scrivere

echo json_encode([
    'messaggio' => 'aggiunto',
    'code' => 200
]);
// 200 significa codice OK, 400 significa codice ERRATO. con echo stampo tutto