var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);


function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
setupCanvas();
window.onresize = function() {
  setupCanvas();
};

let circles = [];
for (let i = 0; i < 5; ++i) {
  circles.push({
    x: canvas.width* Math.random(),
    y: canvas.height* Math.random(),
    radius: 10* Math.random(),
    color: "800080",
    yvelocity: 1.5,
    xvelocity: 1
  });
}


function cycle() {
  
  for (let i = 0; i < 5; i++) {
    
    if (circles[i].x + circles[i].radius > canvas.width) {
      circles[i].xvelocity = -Math.abs(circles[i].xvelocity);
    }
    if (circles[i].x - circles[i].radius < 0) {
      circles[i].xvelocity = Math.abs(circles[i].xvelocity);
    }
    if (circles[i].y + circles[i].radius > canvas.height) {
      circles[i].yvelocity = -Math.abs(circles[i].yvelocity);
    }
    if (circles[i].y - circles[i].radius < 0) {
      circles[i].yvelocity = Math.abs(circles[i].yvelocity);
    }

    circles[i].x += circles[i].xvelocity;
    circles[i].y += circles[i].yvelocity;
    
    ctx.beginPath();
    ctx.arc(circles[i].x, circles[i].y, circles[i].radius, 0, 7 * Math.PI);
    ctx.fillStyle = "800080";
    ctx.fill();
    document.body.style.backgroundColor = "#FFF0F5";

  }
  
  requestAnimationFrame(cycle);
}
requestAnimationFrame(cycle);