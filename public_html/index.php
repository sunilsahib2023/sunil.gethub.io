<!DOCTYPE html>
<!--[if lt IE 7]>
     <html class="ie6 oldie"> <![endif]-->
<!--[if IE 7]>
        <html class="ie7 oldie"> <![endif]-->
<!--[if IE 8]>
        <html class="ie8 oldie"> <![endif]-->
<!--[if gt IE 8]>
    <!-->
<html class=""><!--<![endif]-->




<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-142213830-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-142213830-1');
</script>

    
    
    <meta charset="UTF-8">
  <meta name="description" content="Sunil Student Assignment">
  <meta name="keywords" content="sunil,web pages,arena,rajouri Garden,sunilsahib2000,assignment,student assignment,arena student,student work link,html,css,javaScript,student website,practice,daily practice">
  <meta name="author" content="John Doe">
  
    
    



    
    
    
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Home</title>
    <link href="boilerplate.css" rel="stylesheet" type="text/css">
    <link href="main.css" rel="stylesheet" type="text/css">
    <style type="text/css">

/*
******************************************************************************************************************
*/

 @keyframes sk2
{
0%{left:0px;}
10%{left:0px;}
20%{left:-1000px;}
30%{left:-1000px;}
40%{left:-2000px;}
50%{left:-2000px;}
60%{left:-3000px;}
70%{left:-3000px;}
80%{left:-4000px;}
90%{left:-4000px;}
100%{left:0px;}

}

iframe:focus {
    outline: none;
}

iframe[seamless] {
    display: block;
}

#banner{position:relative;width:5032px; }


#banner{posiion:relative;width:5032px;animation:sk2 22s infinite;}


#banner img{float:left;position:relative;height:400px;}









    body {
    	background-color:black;
    }
     
    a:link{color:white}
    a:visited{color:white}
    a:hover{color:yellow}
    li{list-style:yellow}
    </style>
    <!-- 
    To learn more about the conditional comments around the html tags at the top of the file:
    paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/
     
    Do the following if you're using your customized build of modernizr (http://www.modernizr.com/):
    * insert the link to your js here
    * remove the link below to the html5shiv
    * add the "no-js" class to the html tags at the top
    * you can also remove the link to respond.min.js if you included the MQ Polyfill in your modernizr build 
     
     
    -->
    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
     
     
    <![endif]-->
    <script src="respond.htm"></script>
    <style>
     
    .sk{
    font-family:Garamond,serif;
    line-height: 1em;
    color: #fff9d6;
    font-weight:bold;
    font-size: 52px;
    text-shadow:0px 0px 0 rgb(231,231,231),1px 1px 0 rgb(216,216,216),2px 2px 0 rgb(202,202,202),3px 3px 0 rgb(187,187,187),4px 4px 0 rgb(173,173,173),5px 5px 0 rgb(158,158,158), 6px 6px 0 rgb(144,144,144),7px 7px 6px rgba(0,0,0,0.6),7px 7px 1px rgba(0,0,0,0.5),0px 0px 6px rgba(0,0,0,.2);}
    #box1{float:left;top:5px;top:10px}
    #box12{float:left;top:5px;top:10px}
    #box2{float:right;top:10px;}
    #box3{float:left;text-align:left;}
     
    </style></head>
     
    
    
     
     
     
    <body>
    <div class="gridContainer clearfix"> 

     <div id="LayoutDiv1"> 




<script src="createjs-2015.11.26.min.js"></script>
<script src="flagjs.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new lib.flagjs();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(false,'both',false,1);	
	fnStartAnimation();
}
</script>
<!-- write your code here -->

<div id="mask" style="background:red;width:1000px;height:400px;overflow:hidden"> 
<div id="banner" style="background:black">
  

	    

	
	<img src="images/s1.jpg">
	<img src="images/s2.jpg">
        <img src="images/s3.jpg">
	<img src="images/s4.jpg">
	<img src="images/s5.jpeg">
	
     </div>
  
  </div>


</head>
<body onload="init();" style="margin:0px;">
	
    
     
    <div id="box1">
     
       <h1><font color="white">https://sunilsahib2023.000webhostapp.com</font></h1></div>
     <br/>
    <div id="box12">
        
        
           <a href="uploadimage.html">Upload Student Image </a><br><br>
           
           <a href="mystudent_photo.php">My Student Pic </a><br><br>

    
    <a href="https://sunilsahib2023.000webhostapp.com/flashwork.html">Flash work</a> 
           <a href="banner_with_time.php">PHP Banner with Time </a><br><br>

             <a href="https://sunilsahib2023.000webhostapp.com//banner.php">Image OF Day By PHP </a><br><br>
              <a href="draw.htm">Drawing in Js (by Sunil) </a><br><br>

              <a href="https://sunilsahib2023.000webhostapp.com/loopfor.php">PHP For Loop Example_1 </a><br><br>
              
              <a href="https://sunilsahib2023.000webhostapp.com/mychat/login.html">Talk </a><br><br>
              
             
              
              
              
              
        <br><br>
              
              <a href="https://sunilsahib2023.000webhostapp.com/mychat/Feedback.html">Feedback </a><br><br>
              


            <a href="https://sunilsahib2023.000webhostapp.com/uploadimg.php">Up Load Image for Banner (must be name as p0.jpg....p6.jpg</a><br><br>

                   <a href="https://sunilsahib2023.000webhostapp.com/for_loop_images.php">PHP For Loop Example_2 </a><br><br>



 
        <a href="https://sunilsahib2023.000webhostapp.com">JavaScript and Jquery</a><a href="https://sunilsahib2023.000webhostapp.com/mydp.html" title="click to open">MY DP&nbsp;</a><br><br>
            <a href="https://sunilsahib2023.000webhostapp.com/about.html">About us </a>
            
            <a href="https://www.000webhost.com/">Login webhost.com </a><br><br>
            
            
         </div>
<div><a href="https://sunilsahib2023.000webhostapp.com/loginform1.php">Send Message To Me</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
     
   
     
    </div>
     
    <div class="sk" style="clear:both">
   STUDENTS ASSIGNMENT
	   </div>
         
    <div>
    <div id="box3">
    <h1 style="color:yellow"> My  Current Student Website </h1>
	
	 <div id="box2" style="top:5px;padding:10px;width:500px;height:auto;border:2px green solid;color:white;box-shadow:10px 10px 10px black;text-align:justify;padding:2px;">
     
    <h1>Message for Student</h1>
    
	<?php
	include("notice/mynotice.html");
	?>
	
     
     
    </div>
     
	 
    
    <ul>
        <li>
<a href="http://ritikdandriyal.blogspot.com//"><img src="images/ritik.JPG">RITIK(Web Designer , Ph:-8076302267)</a>
    </li>

<br/>
    
        
        <li><a href= "https://demo-1979.000webhostapp.com/"><img src="images/simran.jpeg">Simran</a></li>

    <br/>
   
         <li><a href= "http://aayushkumar.000webhostapp.com/"><img src="images/aayush.jpg">Aayush</a></li>

    <br/>
    
    
    <li><a href= "https://bhavya2021.000webhostapp.com/"><img src="images/Bhavya.jpg">Bhavya </a></li>
    <br/>
     
    
     
     <br/>
     <li><a href= "https://duskyartistry.000webhostapp.com/"><img src="images2/Ritu.jpg">Ritu:-duskyartistry </a></li>
     <br/>
     
      <br/>
     <li><a href= "https://muskaan2021.000webhostapp.com/"><img src="images/Muskan.png">Muskan </a></li>
     <br/>
     
         
     <li><a href= "https://ritika2021.000webhostapp.com/"><img src="images/Ritika.jpg">Ritika </a></li>
   
     <br/>
     
   
     
      <li><a href= "http://tushar2021.000webhostapp.com/"><img src="images/Tushar.jpg">Tushar</a></li>
     <br/>
   

      <li><a href="http://nikhil2021.000webhostapp.com/"><img src="images/Nikhil.jpg">Nikhil Kumar</a></li>
     <br/>
   
   
   
      <li><a href= "http://mahesh2021.000webhostapp.com/"><img src="images/Mahesh.jpg">Mahesh</a></li>
     <br/>
   
    <li><a href= "https://sunilpaswan2021.000webhostapp.com/"><img src="images/sunil kumar.jpg">Sunil kumar</a></li>
     <br/>
   
   
    <li><a href= "https://chetan1790.000webhostapp.com/"><img src="images/Chetan Sanhotra.jpg">Chetan</a></li>
     <br/>
   
   
   
   <li><a href= "https://vannusaini2022.000webhostapp.com/"><img src="images2/vandana.jpg">Vandana</a></li>
     <br/>
 

<li><a href= "https://amanpreet2022.000webhostapp.com/"><img src="images2/aman.jpg">Aman</a></li>
     <br/>
  
<li><a href= "https://ramneesharora2022.000webhostapp.com/"><img src="images2/ramnesh.jpg">Ramnesh</a></li>
     <br/>
    
<li><a href= "https://priyanshu-rajput2022.000webhostapp.com/"><img src="images2/priyanshu.jpg">Priyanshu</a></li>
     <br/>
    
    
<li><a href= "http://devanshi2022.000webhostapp.com/"><img src="images2/devanshi.jpg">Devanshi</a></li>
     <br/>
   
    
<li><a href= "http://simranchanna29.000webhostapp.com/"><img src="images2/simran2.jpg">Simran</a></li>
     <br/> 

<li><a href= "http://shivani06.000webhostapp.com/index.html"><img src="images2/shivani.jpg">Shivani</a></li>
     <br/> 
<li><a href = "http://yash2003.000webhostapp.com/"><img src="images2/yash.jpg">Yash</a></li>
     <br/> 



<li><a href = "http://prabhnoor2022.000webhostapp.com/"><img src="images2/prabhnoor.jpg">Prabhnoor</a></li>
     <br/> 


   
   
     
     <li>
<a href="https://punyabatra2018.000webhostapp.com"><img src="images/punya.jpg">Punya  Batra (bc-2296)(GWDD)(8377897896)(practice-pages)</a>
</li>
 <br/>

<li>
<a href="http://dessertedbypunya.000webhostapp.com">Responsive Website:-Punya  Batra (bc-2296)(GWDD)(8377897896)(practice-pages)</a>
</li>
 <br/>


 <li>
<a href="http://simranjeet2018.000webhostapp.com/"><img src="images/img.png">Simranjeet Kaur(bc-2127)(AAIP))(practice-pages)</a>
</li>

<br/>


 <li><a href= "https://harshit20.000webhostapp.com/"><img src="images/harshit.jpeg">Harshit Singla</a></li>
     <br/>
   





<li>
<a href="http://jainshivangi586.000webhostapp.com"><img src="images/shivangi.jpg">shivangi Jain (website) (GWDD)(bc-2412)(9560760250)</a>

<br/><br/><br/>
<a href="https://theme.visualmodo.com/wedding">Wedding:-Site by USing Template</a>
</li>
<br/>







<li>
<a href="http://vanshaj2018.000webhostapp.com"><img src="images/vansh.jpg">vanshaj  (GWDD)(practice-pages)</a><br/>
<a href="http://vanshaj1999.000webhostapp.com">webSit_2</a><br/>
<a href="https://autowheels.000webhostapp.com">Website_3</a></br/>
</li>
 <br/>



<br/>


 
 
 
 

<!-- ************************************ -->





<li> <a href="http://sudhirj61.wixsite.com/talksudhirj"><img src="https://static.wixstatic.com/media/19f11d_760adc38508443a082c3cbc29f2d987a~mv2.png/v1/fill/w_439,h_440,al_c,q_85,usm_0.66_1.00_0.01/19f11d_760adc38508443a082c3cbc29f2d987a~mv2.webp"  width="250" height="250">Sudhir Joshi</a></li>
<br/>
<br/>



</ul>
<!--

**************************************************************************************************************************
-->


<!-- Hosting24 Analytics Code -->
<script type="text/javascript" src="Home_files/count.htm"></script>
<!-- End Of Analytics Code -->
</a></div></div></div></div>
<h1>Mail Trial Link </h1>
<h1><a href="https://sunilsahib2023.000webhostapp.com/email.php">Mail to Me </a></h1>

<h3><a href="https://sunilsahib20022.000webhostapp.com/
">Single Page  Application (SPA)  by Angular Js (Routing) Example 1</a> </h3>




<h3><a href="mybanner_effect_2.html">Js Banner Example 2</a> </h3>
<h3><a href="mybanner_effect_3.html">Js Banner Example 3</a> </h3>
<h3><a href="mybanner_effect_3_3.html">Js Banner Example 3_3</a> </h3>
<h3><a href="mybanner_effect_4.HTML">Js Banner Example 4</a> </h3>
<h3><a href="mybanner_effect_5.html">Js Banner Example 5</a> </h3>
<h3><a href="mybanner_effect_6.html">Js Banner under Development Example 6</a> </h3>
<h3><a href="mybanner_effect_7.html">Js Banner Example 7</a> </h3>
<br/>

<h3><a href="sunilotp.php">OTP Test 1 ((To Email)</a> </h3>
<br/>


<h3><a href="skotp.php">OPT Test 2 (To Email)</a> </h3>
<br/>








</body></html>