const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// W500 H620

// character
let characterImage, platformImage;
let characterReady, platformReady;
// Setup + load image
function loadImages() {
  //load platforms image
  platformImage = new Image();
  platformImage.onload = function () {
    platformReady = true;
  };
  platformImage.src =
    "https://raw.githubusercontent.com/kubowania/Doodle-Jump/master/platform.png";

  // show the hero image
  characterImage = new Image();
  characterImage.onload = function () {
    characterReady = true;
  };
  characterImage.src =
    "https://raw.githubusercontent.com/JasonMize/coding-league-assets/master/doodle-jump-doodler.png";
}

function render() {
  if (characterReady) {
    ctx.drawImage(characterImage, 300, 310, 60, 60);
  }
  if (platformReady) {
    ctx.drawImage(platformImage, 200, 110, 80, 15);
  }
}

function main() {
  render();
  requestAnimationFrame(main);
}

loadImages();
main();

let w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;
