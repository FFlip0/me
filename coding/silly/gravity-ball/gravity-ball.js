const ball = document.getElementById("ball");
let ballX = window.innerWidth / 2 - ball.offsetWidth / 2;
let ballY = window.innerHeight / 2 - ball.offsetHeight / 2;
let velocityX = 30;
let velocityY = 30;
const gravity = 0.1;

function updateBall() {
  // Gravity
  velocityY += gravity;

  // Collision with bottom
  if (ballY + ball.offsetHeight >= window.innerHeight) {
    velocityY *= -0.8; // Bounce with a slight energy loss
    ballY = window.innerHeight - ball.offsetHeight;
  }

  // Collision with top
  if (ballY <= 0) {
    velocityY *= -0.8;
    ballY = 0;
  }

  // Collision with right side
  if (ballX + ball.offsetWidth >= window.innerWidth) {
    velocityX *= -0.8;
    ballX = window.innerWidth - ball.offsetWidth;
  }

  // Collision with left side
  if (ballX <= 0) {
    velocityX *= -0.8;
    ballX = 0;
  }

  ballX += velocityX;
  ballY += velocityY;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  requestAnimationFrame(updateBall);
}

ball.addEventListener("click", () => {

  const randomAngle = Math.random() * Math.PI * 20;
  const speed = 50;
  velocityX = speed * Math.cos(randomAngle);
  velocityY = -speed * Math.sin(randomAngle); // Initial upward velocity
});

updateBall(); // Start the animation loop
