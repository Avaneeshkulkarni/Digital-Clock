function time(){

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var session = "AM";

if(hour==0){
    hour = 12;
}
if(hour>12){
    hour = hour-1
    session = "PM"
}
if(hour<10){
    h="0"+h ;
}
if(min<10){
    min="0"+min ;
}
if(sec<10){
    sec="0"+sec ;
}

document.getElementById("Digitalclock").innerHTML = hour + ":" + min + ":" + sec + session  ;

setTimeout(time,1000);
}

time();