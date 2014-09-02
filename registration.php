<!DOCTYPE html>
<?php
session_start();
include("php/mysql_connect.php");
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>registration</title>
    </head>
    <body>
        <div id="registration">
            <form method="POST" enctype="multipart/form-data">
                <p>First I need to choose my <input type="text" placeholder="name" name="name" required> (You can log in with it).</p>
				<p>Tell us your <input type="text" placeholder="email" name="email" required> just in case you lose password.</p>
                <!--<p>Then invent some cool <input type="text" placeholder="title" name="title" required> (It will be under your name).</p>-->
                <p>Now write very secret <input type="password" placeholder="password" name="password" maxlength="10" required> (I hope it isnt 1234).</p>
                <p>Choose avatar. I can find him <input name="file" type="file">. Where is he? :)</p>
                <!--<p>Do I want to play in hardcore mode? When I die, this game ends for me.
                    <select name="hardcore">
                        <option value="0">I want to enjoy this game, no, thanks. </option>
                        <option value="1">I'm fucking awesome, lets play in hardcore mode!</option>
                    </select>
                </p>-->
                <input type="submit" value="Done, I can play now!">
            </form>
        </div>
        <?php
        if(isset($_POST['name'])){
            // insert
            mysql_query("INSERT INTO players (name, password, email, avatar) VALUES ('".$_POST['name']."','".sha1($_POST['password'])."','".$_POST['email']."','".$_FILES['file']['name']."')");
            move_uploaded_file($_FILES["file"]["tmp_name"], "avatars/" . $_FILES["file"]["name"]); // nefunguje na linuxech
            echo "<script>alert('success!');</script>";
        }
        ?>
    </body>
</html>
