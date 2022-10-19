<?php
session_start();
$u = $_POST["uname"];
$p = $_POST["upass"];
 // Declaring Session Variable
 $_SESSION["cuser"] = $u;
$_SESSION["cuserpass"] = $p;





if(($p == "abc")&&($u=="Amit")||($p == "abc")&&($u=="Ravi")||($p == "abc")&&($u=="Anil"))
 {
header("Location:https://sunilsahib2023.000webhostapp.com/mychat/filehandling1.php");
 }
 

else
{
echo "<h1 style='color:red'>Not a Valid user </h1>";
echo "<a href='login.html'><h1> Login Again </h1></a>";
echo "<a href='https://sunilsahib2021.000webhostapp.com/'>Home</a>";

}



?>
