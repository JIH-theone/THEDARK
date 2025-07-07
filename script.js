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
    // Add absorb animation to the whole box
    box.style.animation = 'absorb 1.8s ease-in-out';

    // After animation completes, clear everything
    setTimeout(() => {
      textarea.value = '';
      button.style.display = 'none';
      box.style.animation = '';
    }, 1800);
  });
});

    setTimeout(() => {
      textarea.value = '';
      button.style.display = 'none';
      hand.style.display = 'none';
    }, 1000);
  });
});
