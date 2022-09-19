//timer controls
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const advanceButton = document.querySelector('.plus');
const rewindButton = document.querySelector('.minus');

//timer display
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

//theme controls
const forestSoundButton = document.querySelector('.btn-tree');
const rainSoundButton = document.querySelector('.btn-cloud');
const cafeteriaSoundButton = document.querySelector('.btn-house');
const fireSoundButton = document.querySelector('.btn-fire');

//color-theme-buttons
const lightButton = document.querySelector(".btn-light");
const darkButton= document.querySelector(".btn-dark");

//body
const body = document.querySelector("body");

export {
  playButton,
  pauseButton,
  stopButton,
  advanceButton,
  rewindButton,
  lightButton,
  darkButton,
  minutesDisplay,
  secondsDisplay,
  forestSoundButton,
  rainSoundButton,
  cafeteriaSoundButton,
  fireSoundButton,
  body
}