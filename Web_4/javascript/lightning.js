document.querySelectorAll('tr').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    el.style.opacity = '.9';
  });

  el.addEventListener('mouseout', () => {
    el.style.opacity = '3';
  });
});