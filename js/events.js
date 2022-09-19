import { 
  playButton,
  pauseButton,
  stopButton,
  advanceButton,
  rewindButton,
  lightButton,
  darkButton,
  forestSoundButton,
  rainSoundButton,
  cafeteriaSoundButton,
  fireSoundButton, 
  body,
} from "./elements.js"

export default function Events({ controls, timer, sound }) {
  playButton.addEventListener("click", () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  })

  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  })

  stopButton.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  })

  advanceButton.addEventListener("click", () => {
    let newMinutes = timer.add();
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
    sound.pressButton();
  })

  rewindButton.addEventListener("click", () => {
    let newMinutes = timer.sub();
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
    sound.pressButton();
  })

  lightButton.addEventListener("click", () => {
    lightButton.classList.add("hide");
    darkButton.classList.remove("hide");
    body.classList.add("dark");
  })

  darkButton.addEventListener("click", () => {
    lightButton.classList.remove("hide");
    darkButton.classList.add("hide");
    body.classList.remove("dark");
  })

  forestSoundButton.addEventListener("click", () => {
    forestSoundButton.classList.toggle('selected');
    rainSoundButton.classList.remove('selected');
    cafeteriaSoundButton.classList.remove('selected');
    fireSoundButton.classList.remove('selected');
    sound.pressButton();

    if(forestSoundButton.classList.contains("selected")) {
      sound.bgSoundThemeSelect("forest");
    } else {
      sound.bgSoundThemeSelect("default");
    }
  });

  rainSoundButton.addEventListener("click", () => {
    forestSoundButton.classList.remove('selected');
    rainSoundButton.classList.toggle('selected');
    cafeteriaSoundButton.classList.remove('selected');
    fireSoundButton.classList.remove('selected');
    sound.pressButton();

    if(rainSoundButton.classList.contains("selected")) {
      sound.bgSoundThemeSelect("rain");
    } else {
      sound.bgSoundThemeSelect("default");
    }
  })

  cafeteriaSoundButton.addEventListener("click", () => {
    forestSoundButton.classList.remove('selected');
    rainSoundButton.classList.remove('selected');
    cafeteriaSoundButton.classList.toggle('selected');
    fireSoundButton.classList.remove('selected');
    sound.pressButton();

    if(cafeteriaSoundButton.classList.contains("selected")) {
      sound.bgSoundThemeSelect("cafeteria");
    } else {
      sound.bgSoundThemeSelect("default");
    }  
  })

  fireSoundButton.addEventListener("click", () => {
    forestSoundButton.classList.remove('selected');
    rainSoundButton.classList.remove('selected');
    cafeteriaSoundButton.classList.remove('selected');
    fireSoundButton.classList.toggle('selected');
    sound.pressButton();

    if(fireSoundButton.classList.contains("selected")) {
      sound.bgSoundThemeSelect("fire");
    } else {
      sound.bgSoundThemeSelect("default");
    }  
  })
}