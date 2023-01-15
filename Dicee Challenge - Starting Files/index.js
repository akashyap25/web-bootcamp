$("button").click(function(){
    startover();
 });


function startover() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
 
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
if(randomNumber1==randomNumber2) {
    document.querySelector(" .h1text").innerHTML="Draw";
}
if(randomNumber1>randomNumber2){
document.querySelector(" .h1text").innerHTML="Player 1 wins 🚩";
}
 if(randomNumber1<randomNumber2){
    document.querySelector(" .h1text").innerHTML="Player 2 wins 🚩";
    }
}

function draw() {
    
}




 