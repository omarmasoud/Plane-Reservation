<?php
header('Access-Control-Allow-Origin: *');
$mysqli = new mysqli("localhost", "root", "", "flight_reservation_website_database");

$query_result = $mysqli->query("SELECT * FROM `carrier_info`");
echo($query_result ? json_encode($query_result->fetch_all()) : "Not found");
$mysqli->close();
?>