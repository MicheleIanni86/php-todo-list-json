<?php
$list_jason = file_get_contents("../data/todolist.json");

header('Content-Type: application/json');

echo($list_jason);
?>