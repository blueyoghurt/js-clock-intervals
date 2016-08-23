var secondsMovement = 0;
var minutesMovement = 0;
var hoursMovement = 0;

setInterval(moveSecondHand, 1);
setInterval(moveMinuteHand, 1*60);
setInterval(moveHourHand, 1*60*60);

function moveSecondHand() {
  secondsMovement+= 0.006;
  document.getElementById('second').style.transform = "rotate(" + secondsMovement + "deg)";
}

function moveMinuteHand() {
  minutesMovement+= 0.006;
  document.getElementById('minute').style.transform = "rotate(" + minutesMovement + "deg)";
}

function moveHourHand() {
  hoursMovement+= 0.006;
  document.getElementById('hour').style.transform = "rotate(" + hoursMovement + "deg)";
}


// var now = new Date.now();
// now.now();
