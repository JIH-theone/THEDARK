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
    hand.style.display = 'block';
    hand.style.animation = 'slash 1s ease-out';

    setTimeout(() => {
      textarea.value = '';
      button.style.display = 'none';
      hand.style.display = 'none';
    }, 1000);
  });
});
