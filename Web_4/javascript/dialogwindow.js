const popupWrapper = document.querySelector('.popup');
const images = document.querySelectorAll('#gallery img',);
const btnClose = document.querySelector('.btn-popup-close');
const popupImage = document.querySelector('.popup-image');

const popupShow = () => {
  popupWrapper.classList.add('active');
};

const popupClose = () => {
  popupWrapper.classList.remove('active');
};

images.forEach((image) => {
  image.addEventListener('click', () => {
    popupShow();
    popupImage.setAttribute('src', image.getAttribute('src'));
  });
});

btnClose.addEventListener('click', popupClose);