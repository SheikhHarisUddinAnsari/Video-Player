// To play and stop video
//Grab the items
const player = document.querySelector(".player");
const viewer = player.querySelector(".viewer");
const player__controls = player.querySelector(".player__controls");
const progress = player.querySelector(".progress");
const progress__filled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const player__slider = player.querySelectorAll(".player__slider");
const player__button = player.querySelectorAll("[data-skip]");

// build the funcion

// This function stop and play video by button and
// by clicking on video
function togglePlay() {
  viewer.paused ? viewer.play() : viewer.pause();
  viewer.paused ? (toggle.innerHTML = "►") : (toggle.innerHTML = "❚ ❚");
}

// This function skips video by skip-buttons
function skip() {
  viewer.currentTime += +this.dataset.skip;
}
// This function handles volume and progresss bars
function volAndPlayback() {
  viewer[this.name] = this.value;
}

//this function moves progrssbar
function moveBar(e) {
  const newPosition = (e.offsetX / progress.offsetWidth) * viewer.duration;
  viewer.currentTime = newPosition;
}

// This function handles and updates progress bar
function handleUpdate() {
  const percent = (viewer.currentTime / viewer.duration) * 100;
  progress__filled.style.flexBasis = `${percent}%`;
}
function mouseMove() {
  mousedown === true ? moveBar :console.log(" ") ;
}

// call the funcion
viewer.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
player__button.forEach((button) => {
  button.addEventListener("click", skip);
});
player__slider.forEach((slider) => {
  slider.addEventListener("change", volAndPlayback);
  slider.addEventListener("mousemove", volAndPlayback);
});
viewer.addEventListener("timeupdate", handleUpdate);
let mousedown = false;
progress.addEventListener("click", moveBar);

progress.addEventListener("mousemove", mouseMove);

progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
