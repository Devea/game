<?php
	include_once("session.php");
	include_once("mysql_connect.php");
	
	function logged(){
		return isset($_SESSION['logged']) && $_SESSION['logged']==true;
	}
	
	function getInventory(){
		global $mysqli;
		$result = $mysqli->query(
			"SELECT *
			FROM inventory 
			INNER JOIN items 
			ON inventory.iid=items.id
			WHERE pid = ".$_SESSION['id']
		);
		$inventory = Array();
		if($result->num_rows > 0){
			$i=0;
			while($row=$result->fetch_assoc()){
				$inventory[$i] = Array(
					"id" => $row['id'],
					"name" => $row['name'],
					"description" => $row['description'],
					"count" => $row['count'],
					"slot" => $row['slot']
				);
				$i++;
			}
		}
		return $inventory;
	}
	
	function moveItem($name, $from, $to){
		global $mysqli;
		if($from == $to)
			return "just wtf";
		$result = $mysqli->query(
			"SELECT *
			FROM inventory 
			INNER JOIN items 
			ON inventory.iid=items.id
			WHERE pid = ".$_SESSION['id']." AND iid = ".$name." AND slot = ".$from
		);
		if($result->num_rows == 1){
			$result = $mysqli->query(
				"UPDATE inventory 
				SET slot = ".$to."
				WHERE pid = ".$_SESSION['id']." AND iid = ".$name." AND slot = ".$from
			);
			return "true";
		} else 
			return "false";
	}
?>