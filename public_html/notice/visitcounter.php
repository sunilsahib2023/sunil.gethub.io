 <!DOCTYPE html >
<head >

<title>My website</title>
</head>
<style>
@keyframes blink
{
5%{opacity:0;}
80%{opacity:1;}
10%{opacity:0;}
}

#counter{text-shadow:3px 2px gray;color:red;font-family:arial black;font-size:30px;animation:blink 5s infinite linear;}
</style>
<body bgcolor = "#ccff33">
<?php 
error_reporting(0);
$handle = fopen("counter.txt", "r") or $handle = fopen("counter.txt", "w");

	if(!$handle)
		{
		 echo "Could not open the file:-Counter File is either deleted or moved check your server......" ;
		}
		else {
			$counter = ( int ) fread ($handle,20) ;
			fclose ($handle) ;
			$counter++ ;
               			echo "<p style='position:absolute;left:80%;top:0px'>Visiter Count:  <span id='counter'>$counter</span></p>";
			$handle =  fopen("counter.txt", "w" ) ;
			fwrite($handle,$counter) ;
			fclose ($handle) ;
			}
?>
<h1>Welcome is my website</h1>
 </body>
</html >

