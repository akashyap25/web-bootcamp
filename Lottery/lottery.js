
var level=0;

$("button").click(function(){
    level++;
    var number= ((Math.floor(Math.random()*8))+1);
    const myTimeout = setTimeout(yello, 5000);

   
    red= $(".image"+ number).css("border-color", "red");
   

    

    var audio=new Audio("sounds/"+ number + ".mp3");
    audio.play();
 function yello() {
    red= $(".image"+ number).css("border-color", "yellow");
   } 
    
   if(level==1){

    const myTimeout = setTimeout(redirect, 5000);
   }
   function redirect(){
    location.href = 'index.html';
   }
});




