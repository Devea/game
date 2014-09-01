<?php
    session_start();
    if(isset($_SESSION["login"])){
    include("php/mysql_connect.php");
    include("php/functions.php");
    }
?>
