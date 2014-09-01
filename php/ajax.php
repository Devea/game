<?php
##	Server side AJAX
##	By typekcz

session_start();
header('Content-type: text/xml; charset: utf-8');
mb_internal_encoding("UTF-8");
echo '<?xml version="1.0" encoding="utf-8"?>';
echo "<main>";

if(!isset($_GET['f']))
	exit();
	
switch($_GET['f']){
	case "login":
		if(isset($_POST['name']) && isset($_POST['pass'])){
			include("mysql_connect.php");
			$result = $mysqli->query("SELECT password FROM players WHERE name='".$_POST['name']."'");
			if($result->num_rows == 1){
				$row = $result->fetch_assoc();
				$password = sha1($_POST['pass']);
				if($password == $row['password']){
					$_SESSION['logged'] = true;
					$_SESSION['name'] = $_POST['name'];
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
		if(isset($_SESSION['logged']) && $_SESSION['logged']==true){
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
		echo "<message>You're logged out!</message>";
		break;
}

echo "</main>";	
?>