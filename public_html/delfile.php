 <?php
echo "<h1>Deleting File </h1>";

$file = "back5.jpg";

if (!unlink($file)) {
  echo ("Error deleting $file");
} else {
  echo ("Deleted $file");
}
?> 