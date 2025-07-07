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
document.querySelectorAll('.emotion-box').forEach(box => {
  const textarea = box.querySelector('textarea');
  const button = box.querySelector('button');
  const hand = box.querySelector('.hand-slash');

  textarea.addEventListener('input', () => {
    if (textarea.value.trim().length > 0) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

  button.addEventListener('click', () => {
    // Show hand slash
    hand.style.display = 'block';
    hand.style.animation = 'slash 1s ease-out';

    // Clear textarea after slash
    setTimeout(() => {
      textarea.value = '';
      button.style.display = 'none';
      hand.style.display = 'none';
    }, 1000);
  });
});
