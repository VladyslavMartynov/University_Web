if (!document.createElement('canvas').getContext('2d')) {
  const warning = document.createElement('div');
  warning.classList.add('warning');
  warning.innerHTML = `
    <p>
      Ваш браузер не поддерживает HTML5!
    </p>
  `
  document.querySelector('body').prepend(warning);
}