export default function Sounds() {
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true");

  //themes
  const forestTheme = new Audio("../audios/forest.wav");
  const rainTheme = new Audio("../audios/rain.wav");
  const cafeteriaTheme = new Audio("../audios/cafeteria.wav");
  const fireTheme = new Audio("../audios/fire.wav");

  //input
  const forestVolume = document.querySelector(".forest-volume");
  const rainVolume = document.querySelector(".rain-volume");
  const cafeteriaVolume = document.querySelector(".cafeteria-volume");
  const fireVolume = document.querySelector(".fire-volume");

  bgAudio.play();
  bgAudio.loop = true;


  function pressButton() {
    buttonPress.play();
  }

  function timeUp() {
    kitchenTimer.play();
  }

  function bgSoundThemeSelect(bgTheme) {

    // if(!bgTheme) {
    //   bgAudio.loop = true;
    // }

    bgAudio.pause();

    switch(bgTheme) {
      case "forest":
        rainTheme.pause();
        cafeteriaTheme.pause();
        fireTheme.pause();

        forestTheme.play();
        forestTheme.loop = true;
        break
      case "rain":
        forestTheme.pause();
        cafeteriaTheme.pause();
        fireTheme.pause();

        rainTheme.play();
        rainTheme.loop = true;
        break
      case "cafeteria":
        forestTheme.pause();
        rainTheme.pause();
        fireTheme.pause();

        cafeteriaTheme.play();
        cafeteriaTheme.loop = true;
        break
      case "fire":
        forestTheme.pause();
        rainTheme.pause();
        cafeteriaTheme.pause();

        fireTheme.play();
        fireTheme.loop = true;
        break
      default:
        forestTheme.pause();
        rainTheme.pause();
        cafeteriaTheme.pause();
        fireTheme.pause();

        bgAudio.play();
        bgAudio.loop = true
    }

    forestVolume.addEventListener("input", () => {
      forestTheme.volume = forestVolume.value;
    })

    rainVolume.addEventListener("input", () => {
      rainTheme.volume = rainVolume.value;
    })

    cafeteriaVolume.addEventListener("input", () => {
      cafeteriaTheme.volume = cafeteriaVolume.value;
    })

    fireVolume.addEventListener("input", () => {
      fireTheme.volume = fireVolume.value;
    })
  }

  return {
    pressButton,
    timeUp,
    bgAudio,
    bgSoundThemeSelect
  }
}