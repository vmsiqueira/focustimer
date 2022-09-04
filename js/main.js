import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";

import { 
  playButton,
  pauseButton,
  minutesDisplay,
  secondsDisplay, 
} from "./elements.js"

const sound = Sounds();

const controls = Controls({
  playButton,
  pauseButton
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

Events({ controls, timer, sound });