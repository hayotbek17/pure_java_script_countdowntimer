const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const newYears = "July 7, 2022 03:27:0";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const TotalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(TotalSeconds / 3600 / 24);
  const hours = Math.floor(TotalSeconds / 3600) % 24;
  const minutes = Math.floor(TotalSeconds / 60) % 60;
  const seconds = Math.floor(TotalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
