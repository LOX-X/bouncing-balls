export class Ball{
    constructor(radius,canvas){
        this.canvas = canvas
        this.x = Math.random() * (canvas.width - 2 * radius) + radius;
        this.y = Math.random() * (canvas.width - 2 * radius) + radius;
        this.radius = radius;
        this.dx = 2;
        this.dy = 2;

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
          }
          if (this.y + this.dy > this.canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
          }
        this.x += this.dx;
        this.y += this.dy;

    }
}