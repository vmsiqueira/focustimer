import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeout;
  let minutes = Number(minutesDisplay.textContent);

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function countdown() {
    timerTimeout = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0)

      if(isFinished) {
        resetControls();
        updateDisplay();
        Sounds().timeUp();
        return;
      }

      if(seconds <= 0) {
        seconds = 60;
        --minutes;
      }
      
      updateDisplay(minutes, String(seconds - 1))

      countdown();
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function hold() {
    clearTimeout(timerTimeout);
  }

  function add() {
    let newMinutes = minutes + 5;
    return newMinutes;
  }

  function sub() {
    let newMinutes = minutes - 5;

    if(newMinutes <= 0) {
      newMinutes = 0;
    }

    return newMinutes;
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    add,
    sub
  }

}