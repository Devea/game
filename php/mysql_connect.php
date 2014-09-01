<?php
if(!mysql_connect("localhost","devea","devea"))
    echo "Cant access to MySQL server.";
mysql_query("SET NAMES 'utf8'");
if(!mysql_select_db("devea"))
    echo "Database dont exist.";

?>
