import { Ball } from "./ball.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width= 800;
canvas.height= 800;
const btn = document.querySelector('.btn');

window.addEventListener('resize',()=>{
    canvas.width= 800;
    canvas.height= 700;
})

btn.addEventListener("click", function () {
    console.log("running")
    this.disabled = true;
});


let balls = [];
for (let i = 0; i < 1 ; i++) {
  const ball = new Ball(20,canvas)
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
  
    if (timestamp - lastTime >= interval) {
      lastTime = timestamp;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      spawnBalls();
    }
    requestAnimationFrame(animate)
  }
  
  animate()