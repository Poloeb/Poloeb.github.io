// Bouncing Ball
// SPACE = Pause / Resume
// UP = Increase Speed
// DOWN = Decrease Speed

let ballX = 200;
let ballY = 200;
let speedX = 3;
let speedY = 2;
let ballRadius = 20;
let speedMultiplier = 1;
let isPaused = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 30, 50);

  // 1. Move the ball
  if (isPaused === false) {
    ballX += speedX * speedMultiplier;
    ballY += speedY * speedMultiplier;

    // 2. Bounce off left/right walls
    if (ballX >= width - ballRadius) {
      ballX = width - ballRadius;
      speedX = -abs(speedX);
    } else if (ballX <= ballRadius) {
      ballX = ballRadius;
      speedX = abs(speedX);
    }

    // 3. Bounce off top/bottom walls
    if (ballY >= height - ballRadius) {
      ballY = height - ballRadius;
      speedY = -abs(speedY);
    } else if (ballY <= ballRadius) {
      ballY = ballRadius;
      speedY = abs(speedY);
    }
  }

  // 4. Draw the ball
  fill(255, 200, 0);
  noStroke();
  circle(ballX, ballY, ballRadius * 2);

  // 5. Display controls
  fill(255);
  textSize(14);
  text("SPACE: Pause / Resume", 10, 340);
  text("UP / DOWN: Change Speed", 10, 360);
  text("Speed: x" + speedMultiplier.toFixed(1), 10, 380);

  // 6. Pause indicator
  if (isPaused) {
    textSize(24);
    textAlign(CENTER);
    text("PAUSED", width / 2, 50);
    textAlign(LEFT);
  }
}

// 7. Keyboard Controls
function keyPressed() {

  // SPACE = Pause / Resume
  if (keyCode === 32) {
    isPaused = !isPaused;
    return false;
  }

  // UP = Increase Speed
  if (keyCode === UP_ARROW) {
    speedMultiplier += 0.5;
    return false;
  }

  // DOWN = Decrease Speed
  if (keyCode === DOWN_ARROW) {
    speedMultiplier = max(0.5, speedMultiplier - 0.5);
    return false;
  }
}
