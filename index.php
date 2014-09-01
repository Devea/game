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
	<div id="login">
	<script type="text/javascript">
		var div = document.querySelector("#login");
		get("?f=logged",function(r){
			if(r.getElementByTagName("logged").innerHTML == "true"){
				
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
