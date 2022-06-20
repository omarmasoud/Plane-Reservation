<?php
header('Access-Control-Allow-Origin: *');
$mysqli = new mysqli("localhost", "root", "", "flight_reservation_website_database");
$mysqli->query("DROP DATABASE flight_reservation_website_database");

$sql = file_get_contents('../flight_reservation_website_database.sql');
$result = $mysqli->multi_query($sql);
while($result) $result = $mysqli->next_result();
?>