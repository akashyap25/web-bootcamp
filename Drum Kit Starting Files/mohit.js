var principal=document.getElementById("principal").Value;


var rate=document.getElementById("rate").value;

var years=document.getElementById("years").value;

var intrest = principal*years*rate/100;

var year= new Date().getFullYear()+parseInt(years);

function  updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
<input type="range" min="5" max="10" step="1" onchange="showVal(this.value)"></input> //html//

