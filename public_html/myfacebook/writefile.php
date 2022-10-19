
<body bgColor="yellow">
<?php

date_default_timezone_set('Asia/Kolkata');

$u = $_POST['uname'];
$h = $_POST['post_heading'];
$tt = $_POST['postdata'];


/* Programe to upLoad file  */

$target_dir = "images3/";

$t = $target_dir.basename($_FILES["myfile"]["name"]);


if($_FILES["file"] ["error"] > 0)
    {
      echo "Error ! ".$_FILES["myfile"]["Error"]."<br/>";

    }
  else
  {
echo "<br>";
//echo "Upload :".  $_FILES["myfile"]["name"]."<br>";
//echo "Type :".  $_FILES["myfile"]["type"]."<br>";
//echo "Size:".( $_FILES["myfile"]["size"] /1024)."kb</br>";
//echo "Stored in :".  $_FILES["myfile"]["tmp_name"];

//echo "<h1>File Name is $mfile</h1>";

 }
  
//move_uploaded_file($_FILES["myfile"]["tmp_name"],$_FILES["file"]["name"]);

 move_uploaded_file($_FILES["myfile"]["tmp_name"], $t);
 


      
     // echo "Stored in: " . "images3/".$_FILES["myfile"]["name"];
 


// ************************************************************

$mfile = "images3/".$_FILES["myfile"]["name"];



$ondate = date("d-m-y h:i:s a");

//echo $u	." ".$h." ".$t;

$m .= "<br/>";


$m .= "<div style='margin:auto;text-align:center;background:teal;color:white;font-size:25;box-shadow:10px 10px 10px black;padding:10px;width:600px;height:auto;'><br/><br/>";

$m .= "<img src='$mfile' width='300' height='300' style='box-shadow:10px 10px 10px black;border-radius:30px'>";


$m .= "<br/><h1>$h</h1><br/>Sender  :$u on :- $ondate  <br/>Blog/Message:";

$m .= "<br/><p style='text-align:justify;font-size:20px;padding:10px;'>$tt</p><br/>";

$m .= "<a href='create_post.html'>Write Blog </a></div>";

$f = fopen("blog.html", "a") or die("Error :- Could not save or Unable to open file!");

if($f)
{
fwrite($f,$m);
header("Location:blog.html");
echo "<script>alert('Posted your message')</script>";
}
fclose($f);
?>

<h1><a href="https://sunilsahib200015net23net.000webhostapp.com/">Home</a></h1>
<h1><a href="blog.html">Show Blog</a></h1>
<h1><a href="create_post.html">Write Post</a></h1>

