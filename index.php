<?php
    session_start();
    if(isset($_SESSION["login"])){
    include("php/mysql_connect.php");
    include("php/functions.php");
	include("header.php");
    switch(@$_GET['a']) {
        case 1:
            include("grain_field.php");
            include("php/back_icon.php");
            break;
        case 2:
            include("tournament.php");
            include("php/back_icon.php");
            break;
        case 3:
            include("forest.php");
            include("php/back_icon.php");
            break;
        case 4:
            include("village.php");
            include("php/back_icon.php");
            break;
        case 5:
            include("iron_field.php");
            include("php/back_icon.php");
            break;
        default:
            include("main_map.php");            
    }
    
	include("footer.php");
    
    }
    else{
      header("location: present.php");
    } 
?>