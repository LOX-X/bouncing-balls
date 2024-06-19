import { Ball } from "./ball.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width= 800;
canvas.height= 800;
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const restartBtn = document.querySelector('.restart-btn');

let isAnimate = false;

let balls = [];
let ballSize = 20; 
let ballSpeed = 5; 
let ballCount = 5;

window.addEventListener('resize',()=>{
    canvas.width= 800;
    canvas.height= 700;
})

startBtn.addEventListener("click", function () {
    this.disabled = true;
    stopBtn.disabled = false;
    restartBtn.disabled = false;
    isAnimate = true
    lastTime = 0;
    requestAnimationFrame(animate);
});

stopBtn.addEventListener("click", function () {
  this.disabled = true;
  startBtn.disabled = false;
  restartBtn.disabled = false;
  isAnimate = false;
});

restartBtn.addEventListener("click", function () {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  restartBtn.disabled = true;
  isAnimate = true;
  resetAnimation();
  requestAnimationFrame(animate);
});


const resetAnimation = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls = [];
    for (let i = 0; i < ballCount; i++) {
        const ball = new Ball(ballSize,ballSpeed, canvas);
        balls.push(ball);
    }
    lastTime = 0;
}

window.changeSize = (e)=>{
  const size = parseInt(e.target.value);
  document.getElementById('size').textContent = size;
  ballSize = size;
}

window.changeSpeed = (e)=>{
  const speed = parseInt(e.target.value);
  document.getElementById('speed').textContent = speed;
  ballSpeed = speed;
}

window.changeCount = (e)=>{
  const count = parseInt(e.target.value);
  document.getElementById('count').textContent = count;
  ballCount = count;
}


for (let i = 0; i < ballCount ; i++) {
  const ball = new Ball(ballSize,ballSpeed,canvas)
  balls.push(ball) 
}
const spawnBalls = () =>{
  balls.map((ball)=>{
    ball.draw(ctx);
    ball.update();
  })
}
let fps = 240; //FPS 
let interval = 1000 / fps;
let lastTime = 0;

function animate(timestamp){
  if(isAnimate){
    if (timestamp - lastTime >= interval) {
      lastTime = timestamp;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      spawnBalls();
    }
    requestAnimationFrame(animate)
  }
  }
  requestAnimationFrame(animate);
