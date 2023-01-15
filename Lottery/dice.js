$("button").click(function(){
   var audio=new Audio("sounds/dice.mp3");
   audio.play();
    const myTimeout = setTimeout(startover, 600);
 });





function startover() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
 
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
if(randomNumber1==randomNumber2) {
    document.querySelector(".h1text").innerHTML="Congratulations! You have won a Lucky Draw.🎉😎";
    const myTimeout = setTimeout(draw, 2000);
    
}
if(randomNumber1>randomNumber2){
document.querySelector(" .h1text").innerHTML="Sorry , Try again.🙁";
}
 if(randomNumber1<randomNumber2){
    document.querySelector(" .h1text").innerHTML="Sorry , Try again.🙁";
    }
}

function draw() {
    location.href = 'indexx.html';
     
}



 