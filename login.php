<!DOCTYPE html>
<?php
session_start();
include("php/mysql_connect.php");
?>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <title>login</title>
    </head>
    <body>
		<div id="login-page">
			<div id="login">
				<form method="POST">
					<center>
						<p>
							<label>You can type your</label>
							<input type="password" size="10" placeholder="login" maxlength="10" name="login">
							<label>here.</label>
						</p>
						
						<p>
							<label>You can type your</label>
							<input type="password" size="10" placeholder="password" maxlength="10" name="password">
							<label>here.</label>
							<input type="submit" value="Lets try it!">
						</p>
					</center>
				</form>
				<center><a href="registration.php">Are you new here?</a></center>
			</div>
			<div id="statistics">
				<!--<table class='table'>
					<caption class='caption'>statistics</caption>
					<tr>
						<td class='name item'>name</td>
						<td class='status item'>status</td>
						<td class='item'>hardcore?</td>
					</tr>
				</table>
				<div id="items">
					<table class='table'>
						<?php/*
						$sql=mysql_query("SELECT * FROM login ORDER BY register_date"); 
						while($result=mysql_fetch_array($sql)){
							// time
						if($result["time"]>=3600){
							$time = gmdate("H:i:s",$result["time"]);
						}
						else{
							$time = gmdate("i:s",$result["time"]);
						}
						echo "<tr>";                  
						echo "<td class='item'>".$result["name"]." (".$result["title"].")</td>";
						echo "<td class='item'>".$result["status"]."</td>";
						if($result["hardcore"] == 1){
							echo "<td class='item'>yeah</td>";
						}
						else{
							echo "<td class='item'>nope</td>";
						}
						echo "</tr>";                       
						}*/
						?>
					</table>-->
				</div>
			</div>
		</div>
    </body>
</html>
