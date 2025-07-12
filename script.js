let currentSlide = 0;

document.addEventListener("wheel", (e) => {
  if (e.deltaX > 0 || e.deltaY > 50) slideRight();
  else if (e.deltaX < 0 || e.deltaY < -50) slideLeft();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") slideRight();
  if (e.key === "ArrowLeft") slideLeft();
});

function slideRight() {
  if (currentSlide < 1) {
    currentSlide++;
    document.getElementById("slider").style.transform = "translateX(-100vw)";
  }
}

function slideLeft() {
  if (currentSlide > 0) {
    currentSlide--;
    document.getElementById("slider").style.transform = "translateX(0vw)";
  }
}

function showButton(textarea) {
  const button = textarea.nextElementSibling;
  button.style.display = "block";
}

function absorbText(button) {
  const box = button.parentElement;
  box.style.transition = "opacity 1.5s ease";
  box.style.opacity = 0;
  setTimeout(() => {
    box.innerHTML = box.innerHTML;
    box.style.opacity = 1;
  }, 1600);
}

function handleUnlock() {
  alert("You’ll be redirected to Venmo to complete the purchase.");
  window.open("https://venmo.com/u/JIH1001", "_blank");
}

function enterPassword() {
  const input = prompt("WHAT IS THE PASSWORD BRO??");
  if (input === "0420") {
    localStorage.setItem("darkUnlocked", "true");
    location.reload();
  }
}

window.onload = () => {
  if (localStorage.getItem("darkUnlocked") === "true") {
    document.getElementById("lockedContent").style.display = "none";
    document.getElementById("unlockedContent").style.display = "block";
  }
};
