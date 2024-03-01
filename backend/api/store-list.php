<?php

   $json_todo = file_get_contents("../data/todolist.json");
   
   $php_todo_array = json_decode($json_todo);
   
   $php_todo_array[] = [
    "nameScheda" => $_POST['todo'],
    "doneScheda" => false
   ];

   $result = json_encode($php_todo_array);

   file_put_contents("../data/todolist.json", $result);

   header('Content-Type: application/json');
   
   echo $result;

   
?>