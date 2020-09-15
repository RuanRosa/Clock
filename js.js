function relogio(){
var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var el;
var refresh;

el = document.getElementById('clock');

el.textContent = hour +":"+minutes+ ":" + seconds;


} 
refresh=setInterval(relogio,1000);