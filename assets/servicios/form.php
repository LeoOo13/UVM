<?php
header('Access-Control-Allow-Origin: *');  

$result = [true, false];

$data = array('success' => $result[rand(0,1)]);

header('Content-Type: application/json');

echo json_encode($data);
