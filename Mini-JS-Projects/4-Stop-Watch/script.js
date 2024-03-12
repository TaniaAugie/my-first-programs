let duration = 0;
let interval = null;
const time = document.getElementById("time");

function clockBoard(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  time.innerHTML = `${clockBoard(minutes)}:${clockBoard(seconds)}`;
}

function timer() {
  duration++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  duration = 0;
  setTime();
}
