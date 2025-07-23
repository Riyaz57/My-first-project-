// Like button toggle
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
    if (btn.classList.contains('liked')) {
      btn.classList.remove('fa-regular');
      btn.classList.add('fa-solid');
    } else {
      btn.classList.add('fa-regular');
      btn.classList.remove('fa-solid');
    }
  });
});
