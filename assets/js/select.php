<?php
  header('Access-Control-Allow-Origin: *'); 
    $select = array(
      array(
        array(
          "id" => 1,
          "value" => "Opción 1A"
        ),
        array(
          "id" => 2,
          "value" => "Opción 2A"
        ),
        array(
          "id" => 3,
          "value" => "Opción 3A"
        )
      ),
      array(
        array(
          "id" => 1,
          "value" => "Opción 1B"
        ),
        array(
          "id" => 2,
          "value" => "Opción 2B"
        ),
        array(
          "id" => 3,
          "value" => "Opción 3B"
        )
      ),
      array(
        array(
          "id" => 1,
          "value" => "Opción 1C"
        ),
        array(
          "id" => 2,
          "value" => "Opción 2C"
        ),
        array(
          "id" => 3,
          "value" => "Opción 3C"
        )
      ),
      array(
        array(
          "id" => 1,
          "value" => "Opción 1D"
        ),
        array(
          "id" => 2,
          "value" => "Opción 2D"
        ),
        array(
          "id" => 3,
          "value" => "Opción 3D"
        )
      )
  );

  $id = (isset($_GET['id']) && !empty($_GET['id']) && $_GET['id'] < count($select) && $_GET['id'] > 0 ) ? $_GET['id']-1 : 0;



  header('Content-Type: application/json');

  echo json_encode($select[$id]);