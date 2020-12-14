const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(50, 50, 100, 20);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.fillStyle = "green";
ctx.fillRect(100, 200, 100, 20);

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 400, 100, 40);
ctx.strokeStyle = "rgba(190, 100, 125, 0.5)";
ctx.stroke();
ctx.closePath();

var x = canvas.width / 2;
var y = canvas.height - 30;
