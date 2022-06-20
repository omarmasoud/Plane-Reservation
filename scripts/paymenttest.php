<?php
header('Access-Control-Allow-Origin: *');
$arg = $_GET['payment_method'];
if (isset($arg) && !empty($arg)) {
    require 'dbconn.php';
    echo($arg);
}
?>