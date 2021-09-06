const openers = document.querySelectorAll('.title-opener');

openers.forEach((el) => {
  el.addEventListener('click', () => {
    if (el.nextElementSibling.classList.contains('hidden-content'))
      el.nextElementSibling.classList.toggle('visible');
  });
});