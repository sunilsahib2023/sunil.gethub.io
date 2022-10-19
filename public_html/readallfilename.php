 <?php
echo "<h1>Reading  File From Directory </h1>";
$dir = "images2";


if (is_dir($dir))
{

  if ($dh = opendir($dir))
{
   echo "<form Method='post' action='show.php'><select name='fname'>";
    while (($file = readdir($dh)) !== false)
      {
      //echo "filename:" . $file . "<br>";

      echo "<option  value='$file'>$file</option>";
     
     echo "<img src='images2/p1.jpg' width='50' height='50'><br/>";

    }

echo "</select><input type='submit'><input type='Reset'>";
  
  closedir($dh);
}



}
?> 