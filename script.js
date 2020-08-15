// CONSTANTS
const login = document.getElementById('button-login');
const name = document.getElementById('user-email-phone');
const submitBtn = document.getElementById('facebook-register');
const inputArray = document.querySelectorAll('input');
const registerForm = document.querySelector('.register-form');
const genderCustomCtn = document.querySelector('.gender-custom-container');
const radioGenderPersonalized = document.querySelector('#personalizado');
const registerSuccessContainer = document.querySelector('.right-content');

// LOGIN BUTTON BEHAVIOR ON CLICK
login.addEventListener('click', function () {
  alert(name.value);
});
// CREATE ELEMENT TO INPUT MESSAGE OF ERROR 'INVALID FIELDS'
function invalidFields(text) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  registerForm.appendChild(paragraph);
}
// CREATE ELEMENT TO INPUT WELCOME MESSAGE AFTER REGISTER
function inputRegisterMessage() {
  const firstName = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const phoneEmail = document.querySelector('#phone_email').value;
  const labelBirthdate = document.querySelector('.label-birthdate').value;
  const femaleGender = document.querySelector('#feminino').value;
  const maleGender = document.querySelector('#masculino').value;
  const personalizedGender = document.querySelector('#personalizado').value;
  // CLEAR RIGHT-CONTENT CONTAINER BEFORE INPUT WELCOME MESSAGE
  while (registerSuccessContainer.firstElementChild) {
    registerSuccessContainer.firstElementChild.remove();
  }
  // CREATE WELCOME MESSAGE AND INPUT IN RIGHT-CONTENT CONTAINER
  const parag = document.createElement('p');
  parag.innerHTML = `<h1>Olá, ${firstName} ${lastName}</h1> <br>
  <strong>email ou telefone:</strong> ${phoneEmail} <br>
  <strong>Data de Nascimento:</strong> ${labelBirthdate}
  <strong>Gênero:</strong> <br>
  ${femaleGender} <br>
  ${maleGender} <br>
  ${personalizedGender} `;
  registerSuccessContainer.appendChild(parag);
}
// BUTTON REGISTER BEHAVIOR ON CLICK
submitBtn.addEventListener('click', function () {
  let count = 0;
  // CHECK IF ALL FIELDS ARE FILLED
  for (let i = 2; i < (inputArray.length - 3); i += 1) {
    const resultCheck = inputArray[i].checkValidity();
    if (resultCheck === false) {
      count += 1;
    }
  }
  // DECIDING WAY IF EXIST EMPTY FIELD OR NOT
  if (count !== 0) {
    invalidFields('Campos inválidos');
  } else {
    inputRegisterMessage();
  }
});
// CREATE FIELD IF CHOSEN PERSONALIZED OPTION
radioGenderPersonalized.addEventListener('click', function () {
  const inputGenderCustom = document.createElement('input');
  inputGenderCustom.name = 'gender-custom';
  inputGenderCustom.type = 'text';
  inputGenderCustom.placeholder = 'Gênero (opcional)';
  inputGenderCustom.className = 'gender-custom';
  genderCustomCtn.appendChild(inputGenderCustom);
});
