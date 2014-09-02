<?php
if(!mysql_connect("localhost","devea","devea"))
    echo "Cant access to MySQL server.";
mysql_query("SET NAMES 'utf8'");
if(!mysql_select_db("devea"))
    echo "Database dont exist.";
	
$mysqli = new mysqli("localhost", "devea", "devea", "devea");
if ($mysqli->connect_error) {
    die("Connect Error (".$mysqli->connect_errno.") ".$mysqli->connect_error);
}
$mysqli->query("SET NAMES 'utf8'");

?>
