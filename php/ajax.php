<?php
##	Server side AJAX
##	By typekcz

include_once("session.php");
header('Content-type: text/xml; charset: utf-8');
mb_internal_encoding("UTF-8");

include_once("mysql_connect.php");
include_once("account.php");

echo '<?xml version="1.0" encoding="utf-8"?>';
echo "<main>";

if(!isset($_GET['f']))
	exit();
	
echo "<debug>";
print_r($_GET);
print_r($_POST);
echo "</debug>";
	
switch($_GET['f']){
	case "login":
		if(isset($_POST['name']) && isset($_POST['pass'])){
			$result = $mysqli->query(
				"SELECT id, password 
				FROM players 
				WHERE name='".$_POST['name']."'"
			);
			if($result->num_rows == 1){
				$row = $result->fetch_assoc();
				$password = sha1($_POST['pass']);
				if($password == $row['password']){
					$_SESSION['logged'] = true;
					$_SESSION['name'] = $_POST['name'];
					$_SESSION['id'] = $row['id'];
					echo "<message>You're logged in!</message>";
					echo "<data>true</data>";
				} else {
					echo "<message>I'm sorry but you have entered wrong name or password (or both).</message>";
					echo "<data>false</data>";
				}
			} else {
				echo "<message>I'm sorry but you have entered wrong name or password (or both).</message>";
				echo "<data>false</data>";
			}
		} else {
			echo "<message>Please enter your name and password.</message>";
			echo "<data>false</data>";
		}
		break;
	case "logged":
		echo "<data>";
		if(logged()){
			echo "<logged>true</logged>";
			echo "<name>".$_SESSION['name']."</name>";
		} else {
			echo "<logged>false</logged>";
		}
			echo "</data>";
		break;
	case "logout":
		$_SESSION['logged'] = false;
		$_SESSION['name'] = "";
		$_SESSION['id'] = -1;
		echo "<message>You're logged out!</message>";
		break;
		
	case "getInventory":
		if(logged()){
			echo "<data>".json_encode(getInventory())."</data>";
		} else {
			echo "<message>You're not logged in!</message>";
		}
		break;
}

echo "</main>";	
?>