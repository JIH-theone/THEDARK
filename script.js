// Just a test glow
const canvas = document.getElementById("voidCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lantern = document.getElementById("lantern");
const text = document.getElementById("text");
const music = document.getElementById("darkMusic");

lantern.addEventListener("click", () => {
  text.style.opacity = "0"; // Fade text
  music.play(); // Play music
});
