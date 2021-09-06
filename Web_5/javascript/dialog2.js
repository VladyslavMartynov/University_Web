
const lightboxImages = document.querySelectorAll('.image-modal-content img');

const modalElement = element =>
  document.querySelector(`.image-modal-popup ${element}`);

const body = document.querySelector('body');

document.addEventListener('click', () => {
  body.style.overflow = 'auto';
  modalPopup.style.display = 'none';
});

const modalPopup = document.querySelector('.image-modal-popup');

lightboxImages.forEach(img => {
  const data = img.dataset;
  img.addEventListener('click', e => {
    body.style.overflow = 'hidden';
    e.stopPropagation();
    modalPopup.style.display = 'block';
 
    modalElement('img').src = img.src;
  });
});