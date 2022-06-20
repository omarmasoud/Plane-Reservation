<?php
if (file_exists('DBLOCK')) unlink('DBLOCK'); // Delete DBLOCK if it was created
exec("taskkill /F /IM php.exe /T >nul 2>&1"); // Then kill all php tasks
?>