function loginAlert() {
  const email = document.querySelector('#user-email-phone').value;
  alert(email);
}

function showInvalidFieldsError() {
  const errorMessage = document.createElement('p');
  const signUpBtn = document.getElementById('facebook-register');
  errorMessage.innerHTML = 'Campos inválidos';
  errorMessage.id = 'invalid-fields';
  signUpBtn.after(errorMessage);
}

function checkValidInputs() {
  const formInputs = document.forms['signUp-form'].getElementsByTagName('input');
  for (let index = 0; index < formInputs.length; index += 1) {
    const currentInput = formInputs[index];
    if (!currentInput.value) {
      return false;
    }
  }
  return true;
}

function createUser () {
  const newUser = {
    firstName: document.querySelector('.input-first-name').value,
    lastName: document.querySelector('.input-last-name').value,
    cellNumber: document.getElementById('cel_number').value,
    birthday: document.querySelector('.birthdate').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
  }
  return newUser;
}

function createTableInfo() {
  if (checkValidInputs()) {
    // recupera todos os valores
    const userData = createUser();
    // Recover main div
    const mainContainer = document.querySelector('.main-content');
    // Remove right-content div from main container
    document.querySelector('.right-content').remove();
    // Create new div for user info and append it to main container
    const userInfoDiv = document.createElement('div');
    userInfoDiv.className = 'right-content';
    mainContainer.appendChild(userInfoDiv);
    // Create a new element to show user info
    const paragraph = document.createElement('h1');
    userInfoDiv.appendChild(paragraph);
    paragraph.innerText = `Olá, ${userData.firstName} ${userData.lastName},
    seu login é: ${userData.cellNumber},
    sua data de aniversário é: ${userData.birthday}
    e seu gênero é: ${userData.gender}`;
  } else {
    if (!document.getElementById('invalid-fields')) {
      showInvalidFieldsError();
    }
  }
}

function createCustomGenderField() {
  const customGenderField = document.createElement('input');
  customGenderField.name = 'gender-custom';
  customGenderField.placeholder = 'Gênero (opcional)';
  customGenderField.classList.add('gender');
  customGenderField.id = 'gender-custom-id';
  return customGenderField;
}

function handleCustomGender() {
  if (!document.getElementById('gender-custom-id')) {
    const customGenderField = createCustomGenderField();
    const signUpForm = document.getElementById('gender-selection');
    signUpForm.after(customGenderField);
  }
}

function deleteCustomGender() {
  if (document.getElementById('gender-custom-id')) {
    document.getElementById('gender-custom-id').remove();
  }
}

window.onload = function () {
  const loginBtn = document.querySelector('#button-login');
  loginBtn.addEventListener('click', loginAlert);

  const genderArea = document.getElementById('gender-selection');
  genderArea.addEventListener('click', function (event) {
    const genderSelected = event.target.id;
    if (genderSelected === 'female' || genderSelected === 'male') {
      deleteCustomGender();
    } else if (genderSelected === 'custom') {
      handleCustomGender();
    }
  });

  const signUpBtn = document.getElementById('facebook-register');
  signUpBtn.addEventListener('click', function (event) {
    event.preventDefault();
    checkValidInputs();
    createTableInfo();
  });
};
