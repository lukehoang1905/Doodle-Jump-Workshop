const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

/** IMPORTANT MEASUREMENTS
 * Canvas width:"500" height="600"
 * Character width,height ="60"
 * Platforms width:"80" height="15"
 */
const canvasWidth = 500;
const canvasHeight = 620;
const characterWidth = 60;
const characterHeight = 60;
const platformWidth = 80;
const platformHeight = 15;
const gap = canvasHeight / 5;
/** end of Important Measurements */
let characterX = Math.round(canvasWidth / 2);
let characterY = Math.round(canvasHeight / 3);

// Minh

const initCharacter = {
  characterX: Math.round(canvasWidth / 2),
  characterY: Math.round(canvasHeight / 2),
  speed: 3,
};
let score = 0;
let level = 0;
const initPlatforms = [
  {
    platformX: Math.floor(Math.random() * (canvasWidth - platformWidth)),
    platformY: 0,
    speed: 1 + level / 2,
  },
  {
    platformX: Math.floor(Math.random() * (canvasWidth - platformWidth)),
    platformY: gap,
    speed: 1,
  },
  {
    platformX: Math.floor(Math.random() * (canvasWidth - platformWidth)),
    platformY: 2 * gap,
    speed: 1,
  },
  {
    platformX: Math.floor(Math.random() * (canvasWidth - platformWidth)),
    platformY: 3 * gap,
    speed: 1,
  },
  {
    platformX: Math.floor(Math.random() * (canvasWidth - platformWidth)),
    platformY: 4 * gap,
    speed: 1,
  },
];
let character = initCharacter;
let platforms = initPlatforms;

function restart() {
  character = initCharacter;
  platforms = initPlatforms;
}

//Step 1:
//let draw a green platform
//  - cordinates x= 1/2 canvasWidth, y= 1/2canvasHeight
// let platformX = Math.random() * canvasWidth;
// let platformY = Math.random() * canvasHeight;
// //  - color: green,
// ctx.fillStyle = "rgba(156, 217, 107, 0.7)";
// //  - draw the platform
// ctx.fillRect(platformX, platformY, platformWidth, platformHeight);

//Step 1.1
//let draw multiple platform
let platformX = canvasWidth / 2;
let platformY = canvasHeight / 2;
function drawPlatforms() {
  for (let index = 0; index < platforms.length; index++) {
    const platform = platforms[index];
    ctx.fillStyle = "rgba(156, 217, 107, 0.7)";
    ctx.fillRect(
      platform.platformX,
      platform.platformY,
      platformWidth,
      platformHeight
    );
  }
}

//step 2
//let draw our character box
//  - coordinates x = 1/2 canvasWidth, y = 1/3 canvasHeight

function drawCharacter() {
  ctx.fillStyle = "rgba(217,156,107, 1)";
  ctx.fillRect(
    character.characterX,
    character.characterY,
    characterWidth,
    characterHeight
  );
}

//step 3
//let move our character
//Step 3.1 the logic to make your character move
// if (37 in keysDown) { // Player is holding left key
//     heroX -= 10;
//   }
//   if (39 in keysDown) { // Player is holding right key
//     heroX += 10;
//   }
//Step 3.2 introducing Update function
let jumpTime = 60;
let isGameOver = false;
function update() {
  if (isGameOver === true) return;
  if (37 in keysDown) {
    // Player is holding left key
    character.characterX -= 10;
  }
  if (39 in keysDown) {
    // Player is holding right key
    character.characterX += 10;
  }

  //gameover logic
  if (character.characterY > canvasHeight) {
    isGameOver = true;
  }
  // detection of the jump
  for (let index = 0; index < platforms.length; index++) {
    const platform = platforms[index];
    if (
      character.characterY + characterHeight >= platform.platformY &&
      character.characterY + characterHeight <
        platform.platformY + platformHeight &&
      character.characterX >= platform.platformX - platformWidth / 2 &&
      character.characterX <= platform.platformX + platformWidth
    ) {
      jumpTime = 50;
      score++;
      //   platform.speed += 0.3;
      // console.log({ characterY, characterX, platform.platformX, platform.platformY });
      if (score > 10 || score > 20 || score > 30 || score > 40 || score > 50) {
        level++;
        platform.speed += level / 3;
      }
    }
  }
  if (jumpTime > 0) {
    character.characterY -= character.speed;
    jumpTime -= 1;
  } else {
    character.characterY += character.speed;
  }
  for (let index = 0; index < platforms.length; index++) {
    const platform = platforms[index];
    platform.platformY += platform.speed;
    if (platform.platformY >= canvasHeight) {
      platform.platformY = 0;
      platform.speed = 1;
      platform.platformX = Math.floor(
        Math.random() * (canvasWidth - platformWidth)
      );
    }
  }
}

//keyboard listener
let keysDown = {};
function setupKeyboardListeners() {
  // Check for keys pressed where key represents the keycode captured
  // For now, do not worry too much about what's happening here.
  addEventListener(
    "keydown",
    function (key) {
      keysDown[key.keyCode] = true;
    },
    false
  );

  addEventListener(
    "keyup",
    function (key) {
      delete keysDown[key.keyCode];
    },
    false
  );
}
setupKeyboardListeners();
//3.2 introducing Main function
function main() {
  //clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  update();
  requestAnimationFrame(main);
  drawPlatforms();
  drawCharacter();
  document.getElementById("score").innerHTML = score;
}
main();
//request animation frame
let w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;