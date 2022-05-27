var i = 0;
var txt = 'Professional Problem Solver';
var speed = 75;
var blank = ''
var repeater;



function mouseLeave() {
    document.getElementById("demo").innerHTML = blank;
  }

  
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
