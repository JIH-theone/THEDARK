const lantern = document.getElementById("lantern");
const fadeText = document.getElementById("fadeText");
const audio = document.getElementById("darkAudio");

// Start playing immediately (some browsers block autoplay unless muted or interacted)
window.addEventListener("load", () => {
  audio.play().catch(() => {
    // If browser blocks it, wait for user interaction
    document.body.addEventListener("click", () => audio.play());
  });
});

// Fade text on click or hover
lantern.addEventListener("mouseenter", () => {
  fadeText.style.opacity = "0";
});
lantern.addEventListener("click", () => {
  fadeText.style.opacity = "0";
});
