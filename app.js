function setTime() {

// Declare vars for sec, min, hour
let currentTime = new Date;
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

// Grap hands from dom for seconds, min hour
hourHand = document.getElementById('hour');
minuteHand = document.getElementById('minute');
secondHand = document.getElementById('second');


// Set seconds
  seconds *= 6;
  seconds += 90;
  secondHand.style.transform = `rotate(${seconds}deg)`;

// Set minutes
  minutes *= 6;
  minutes += 90;
  minuteHand.style.transform = `rotate(${minutes}deg)`;

// Set hours
  if (hours > 12){
    hours -= 12;
  }
  hours *= 30;
  hours += 90;
  hourHand.style.transform = `rotate(${hours}deg)`;
}

window.setInterval(setTime,1000);




