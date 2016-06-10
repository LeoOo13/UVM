<?php
  header('Access-Control-Allow-Origin: *'); 
  $markers = array(
    array(
      "title" => "Stockholm",
      "lat" => 59.3,
      "lng" => 18.1,
      "description" => "Stockholm is the capital and the largest city of Sweden and constitutes the most populated urban area in Scandinavia with a population of 2.1 million in the metropolitan area (2010)"
    ),
    array(
      "title" => "Oslo",
      "lat" => 59.9,
      "lng" => 10.8,
      "description" => "Oslo is a municipality, and the capital and most populous city of Norway with a metropolitan population of 1,442,318 (as of 2010)."
    ),
    array(
      "title" => "Copenhagen",
      "lat" => 55.7,
      "lng" => 12.6,
      "description" => "Copenhagen is the capital of Denmark and its most populous city, with a metropolitan population of 1,931,467 (as of 1 January 2012)."
    )
);

  header('Content-Type: application/json');

  echo json_encode($markers);