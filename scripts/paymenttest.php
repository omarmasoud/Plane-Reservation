<?php
header('Access-Control-Allow-Origin: *');
$arg = $_GET['payment_method'];
if (isset($arg) && !empty($arg)) {

    $mysqli = new mysqli("localhost", "root", "", "flight_reservation_website_database");

    $query_result = $mysqli->query("SELECT * FROM `paymentmethods` WHERE `name` = '$arg'");
    echo($query_result ? json_encode($query_result->fetch_all()) : "OYYYE");
    $mysqli->close();

}
?>