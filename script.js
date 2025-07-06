// Just a test glow
const canvas = document.getElementById("voidCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "white";
ctx.font = "30px sans-serif";
ctx.fillText("you are not alone", 50, 100);
