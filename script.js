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
