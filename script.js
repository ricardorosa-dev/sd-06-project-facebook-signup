// Estrutura de resposta de campos não preenchidos
let error = 0;
const inputsForm = document.querySelectorAll('.validaForm');
const messageParagraph = document.createElement('p');
messageParagraph.innerText = 'Campos inválidos';

// Estrutura  para input customização de gênero
const inputPersonalOptional = document.createElement('input');
inputPersonalOptional.type = 'text';
inputPersonalOptional.name = 'gender-custom';
inputPersonalOptional.placeholder = 'Gênero (opcional)';
const personalField = document.querySelector('#personal-field');
personalField.appendChild(inputPersonalOptional);
personalField.style.display = 'none';

const optionFemaleCheck = document.querySelector('#feminino');
const optionMaleCheck = document.querySelector('#masculino');
const optionPersonalCheck = document.querySelector('#personalizado');
function handleGenderOptions(event) {
  const optionChecked = event.target;
  if (optionChecked.value === 'Personalizado') {
    personalField.style.display = 'block';
  } else {
    personalField.style.display = 'none';
  }
}
document.querySelector('.genderDiv').addEventListener('click', handleGenderOptions);

// Estrutura alert para email/senha do header
const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

// Estrutura verifica radio check
function testRadioChecked() {
  if (optionFemaleCheck.checked === false &&
    optionMaleCheck.checked === false &&
    optionPersonalCheck.checked === false) {
    personalField.appendChild(messageParagraph);
  }
}

// Estrutura para validar se todos foram preenchidos
function inputValidate() {
  for (let i = 0; i <= inputsForm.length - 1; i += 1) {
    if (inputsForm[i].value === '') {
      error += 1;
    }
  }
}

// Estrutura validação radio check e inputs
document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  inputValidate();
  testRadioChecked();
  if (error > 0) {
    personalField.appendChild(messageParagraph);
  }
});
