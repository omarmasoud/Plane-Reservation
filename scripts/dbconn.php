<?php
header('Access-Control-Allow-Origin: *');
$sql = file_get_contents('../flight_reservation_website_database.sql');
$mysqli = new mysqli("localhost", "root", "", "flight_reservation_website_database");
$mysqli->multi_query($sql);
?>