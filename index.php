<!DOCTYPE html>
<html lang="cs">
<head>
    <title></title>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="robots" content="all">
    <link rel="stylesheet" type="text/css" href="">
	<script type="text/javascript" src="js/ajax.js"></script>
</head>
<body>
	<div id="login"></div>
	<script type="text/javascript">
		var div = document.querySelector("#login");
		
		function login(user, pass){
			post("f=login", "user="+user+"&pass="+pass, function(r){
				if(r.querySelector("data").innerHTML == "true"){
					div.innerHTML = "logged";
				}
				alert(r.querySelector("message").innerHTML);
			});
			return false;
		}
		
		get("f=logged",function(r){
			if(r.querySelector("logged").innerHTML == "true"){
				div.innerHTML = "You're logged in!";
			} else {
				div.innerHTML = getContent("html/login.html");
			}
		});
	</script>
</body>
</html>
<?php
    /*session_start();
    if(isset($_SESSION["login"])){
    include("php/mysql_connect.php");
    include("php/functions.php");
    }*/
	
?>
