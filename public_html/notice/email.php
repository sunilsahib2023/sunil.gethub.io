<?php
// the message

if($_SERVER["REQUEST_METHOD"]=="POST")
{
$msg = $_POST['emessage'];
$ti = $_POST['maddress'];
// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail($ti,"http://sunilsahib2021.000webhostapp.com/sunil",$msg);

echo "<script>document.title = 'Mail Sent'</script>";
}
?>

<div style='text-align:left;margin-left:20px'>
<h3>E-malil</h3>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" Method="post">
 <P>To&nbsp;&nbsp;<input type = "text" name="maddress" value="" size="25"></p>
 <p>Message<br/><textarea rows="15" cols="70" value="" name="emessage"></textarea></p><p><input type="submit" value="send"><input type="reset"> </p>
</form>
</div>
<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<a href='http://sunilsahib2021.000webhostapp.com/sunil'>Home</a>