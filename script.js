let error = 0;
const inputsForm = document.querySelectorAll('.validaForm');
const messageParagraph = document.createElement('p');
messageParagraph.innerText = 'Campos inválidos';

const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

function testRadioChecked() {
  if (document.querySelector('#feminino').checked === false &&
    document.querySelector('#masculino').checked === false &&
    document.querySelector('#personalizado').checked === false) {
    document.querySelector('#personal-field').appendChild(messageParagraph);
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
    document.querySelector('#personal-field').appendChild(messageParagraph);
  }
});

function enableInputGenderOption() {
  const personalChecked = document.querySelector('#personal');
  personalChecked.setAttribute('type', 'text');
}
document.querySelector('#personalizado').addEventListener('change', enableInputGenderOption);
