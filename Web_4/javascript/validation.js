const mailBtn = document.getElementById('validate-mail');
const telBtn = document.getElementById('validate-tel');
const sendBtn = document.getElementById('send3');
const mailInput = document.getElementById('input-mail');
const telInput = document.getElementById('input-tel');
createErrorMsgElement();
sendBtn.setAttribute('disabled', true);

let isMailValid = false;
let isTellValid = false;


mailBtn.addEventListener('click', function (event) {
  validateEmail(event);
  if (isMailValid && isTellValid) {
    sendBtn.removeAttribute('disabled');
  }
  else {
    sendBtn.setAttribute('disabled', true);
  }
});

telBtn.addEventListener('click', function (event) {
  validateTel(event);
  if (isMailValid && isTellValid) {
    sendBtn.removeAttribute('disabled');
  }
  else {
    sendBtn.setAttribute('disabled', true);
  }
});

function validateEmail(event) {
  event.preventDefault();

  if (isEmply(mailInput.value)) {
    printMsg(mailInput, 'Enter your email, please');
    mailInput.classList.add('error');
    isMailValid = false;
    return;
  }

  if (!mailInput.value.includes('@') || mailInput.value.length <= 3) {
    printMsg(mailInput, 'Enter proper email, please');
    mailInput.classList.add('error');
    isMailValid = false;
    return;
  }

  if (mailInput.classList.contains('error')) {
    printMsg(mailInput, '');
    mailInput.classList.remove('error');
    isMailValid = true;
  }
}

function validateTel(event) {
  event.preventDefault();

  if (isEmply(telInput.value)) {
    printMsg(telInput, 'Enter your phone number, please');
    telInput.classList.add('error');
    isTellValid = false;
    return;
  }

  if (telInput.value.length < 7) {
    printMsg(telInput, 'phone number must have at least 7 digits');
    telInput.classList.add('error');
    isTellValid = false;
    return;
  }

  if (areAllDigitsEqual(telInput.value)) {
    printMsg(telInput, 'all chars cant be equal');
    telInput.classList.add('error');
    isTellValid = false;
    return;
  }

  if (telInput.classList.contains('error')) {
    printMsg(telInput, '');
    telInput.classList.remove('error');
    isTellValid = true;
  }
}

function isEmply(str) {
  return str.length === 0 ? true : false;
}

function createErrorMsgElement() {
  const errorMsgElement = document.createElement('div');
  errorMsgElement.classList.add('error-msg');

  mailInput.parentNode.insertBefore(errorMsgElement, mailInput.nextSibling);
  telInput.parentNode.insertBefore(errorMsgElement.cloneNode(), telInput.nextSibling);
}

function printMsg(element, msg) {
  element.nextSibling.textContent = msg;
}

function areAllDigitsEqual(str) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const results = [];
  const chars = str.split('');

  numbers.forEach((number) => {
    let areEqual = true;
    for (let i = 0; i < chars.length; i++) {
      if (number != chars[i]) {
        areEqual = false;
        break;
      }
    }
    results.push(areEqual);
  });

  for (let i = 0; i < results.length; i++) {
    if (results[i]) {
      return true
    }
  }

  return false;
}