let error = 0;
const inputsForm = document.querySelectorAll('.validaForm');
const messageParagraph = document.createElement('p');
messageParagraph.innerText = 'Campos inválidos';
const inputPersonalOptional = document.querySelector('.personal');
const optionFemaleCheck = document.querySelector('#feminino');
const optionMaleCheck = document.querySelector('#masculino');
const optionPersonalCheck = document.querySelector('#personalizado');
const personalField = document.querySelector('#personal-field');

window.onload = function () {
  optionFemaleCheck.addEventListener('click', () => {
    inputPersonalOptional.style.display = 'none';
  });
  optionMaleCheck.addEventListener('click', () => {
    inputPersonalOptional.style.display = 'none';
  });
  optionPersonalCheck.addEventListener('click', () => {
    inputPersonalOptional.style.display = 'block';
  });
};

const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

function testRadioChecked() {
  if (optionFemaleCheck.checked === false &&
    optionMaleCheck.checked === false &&
    optionPersonalCheck.checked === false) {
    personalField.appendChild(messageParagraph);
  }
}

function inputValidate() {
  for (let i = 0; i <= inputsForm.length - 1; i += 1) {
    if (inputsForm[i].value === '') {
      error += 1;
    }
  }
}

document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  inputValidate();
  testRadioChecked();
  if (error > 0) {
    personalField.appendChild(messageParagraph);
  }
});
