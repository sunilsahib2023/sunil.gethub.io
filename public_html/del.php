<?php
echo "<h1>Deleting  File</h1> ";

$myfile = $_POST['fdel'];

$f =  "images2/$myfile";
//echo $f;

if (!unlink($f))
  {
  echo "<h1 style='color:red'>Error deleting $f</h1>";
   } 
else {
  echo "<h1 style='color:green'>$f File deleted Successfully</h1>";
  }


?>
<br/><br/>
<a href="#">Home</a>
<br/><br/>
<a href="readallfilename.php">Delete More</a>

