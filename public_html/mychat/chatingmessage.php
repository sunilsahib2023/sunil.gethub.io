<meta http-equiv="refresh" content="10">

<style>
#box{color:red;border:1px black solid;overflow:scroll;width:400px;height:300px;}

</style>


<?php
ini_set( "display_errors", 0); 

header("Refresh:2; url = chatingmessage.php");




 

if(file_exists("remark.html"))
{

	$file = fopen('remark.html','a+') or die("Could not Read file");

	$content = fread($file,filesize("remark.html"));

	echo '<div id="box" >'.$content.'</div>';
	fclose($file);
}

?>


<script>
d = document.getElementById("box")
d.scrollTop = d.scrollHeight;
document.title =Math.random()*300

</script>