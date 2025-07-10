document.querySelectorAll('.emotion-box').forEach(box => {
  const textarea = box.querySelector('textarea');
  const button = box.querySelector('button');

  textarea.addEventListener('input', () => {
    if (textarea.value.trim().length > 0) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

  button.addEventListener('click', () => {
    box.classList.add('absorbing');

    setTimeout(() => {
      textarea.value = '';
      button.style.display = 'none';
      box.classList.remove('absorbing');
    }, 1500);
  });
});
function handleUnlock() {
  alert("You will now be taken to a checkout page. Once done, refresh to unlock.");
  window.open('https://paypal.com/paypalme', '_blank'); // masked identity PayPal page
}

function enterPassword() {
  const input = prompt("WHAT IS THE PASSWORD BRO??");
  if (input === "0420") {
    localStorage.setItem("darkUnlocked", "true");
    location.reload();
  }
}

function checkUnlock() {
  if (localStorage.getItem("darkUnlocked") === "true") {
    document.getElementById("lockedMessage").style.display = "none";
    document.getElementById("unlockedWords").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", checkUnlock);
