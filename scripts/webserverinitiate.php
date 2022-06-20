<?php
if (!file_exists('DBLOCK')) {

    $mysqli = new mysqli("localhost", "root", ""); // Establish initial connection...
    $mysqli->query("DROP DATABASE IF EXISTS flight_reservation_website_database"); // DROP database; if exists,
    $mysqli->query("CREATE DATABASE flight_reservation_website_database"); // then re-create it in order to...
    $mysqli->multi_query(file_get_contents('flight_reservation_website_database.sql')); // ...replace it,
    while($mysqli->next_result()); // and consume the results buffer (everything should be OK, the .sql works fine).
    $dblock = fopen('DBLOCK', 'w'); // Then create a DBLOCK file to indicate that DB is initialized successfully.
    fclose($dblock); // Then close the file cause we're not writing anything to it (just a blank lock file).
    exec('php -S localhost:12345'); // And finally, start the server in background.).

}
?>