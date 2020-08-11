function loginAlert() {
  const email = document.querySelector('#user-email-phone').value;
  alert(email);
}

function showInvalidFieldsError() {
  const errorMessage = document.createElement('p');
  const signUpBtn = document.getElementById('facebook-register');
  errorMessage.innerHTML = 'Campos inválidos';
  signUpBtn.after(errorMessage);
}

function createTableInfo() {
  if (checkValidInputs()) {
    // recupera todos os valores
    const firstName = document.querySelector('.input-first-name').value;
    const lastName = document.querySelector('.input-last-name').value;
    const cellNumber = document.getElementById('cel_number').value;
    const birthday = document.querySelector('.birthdate').value;
    // recupera o valor do radio button , precisa fazer teste para saber ql esta marcado
    const radioInputs = document.getElementsByName('gender');
    const gender = (function() {
      for (let index = 0; index < radioInputs.length; index += 1) {
        if (radioInputs[index].checked) {
          return radioInputs[index].value;
        }
      }
    })();
    console.log(gender);
    // recupera o pai para a gente add a nova rightcontent
    const mainDiv = document.querySelector('.main-content');
    // apaga o lado direito inteiro de uma vez
    document.querySelector('.right-content').remove();
    // cria nova div e add no pai
    const userInfoDiv = document.createElement('div');
    userInfoDiv.className = 'right-content';
    mainDiv.appendChild(userInfoDiv);
    // cria o novo paragrafo que é o resultado e add na div
    const paragraph = document.createElement('h1');
    userInfoDiv.appendChild(paragraph);
    paragraph.innerText = `Olá, ${firstName} ${lastName}, seu login é: ${cellNumber}, sua data
    de aniversário é: ${birthday} e seu gênero é: ${gender}`;
  } else {
    showInvalidFieldsError();
  }
}

function checkValidInputs() {
  // por conta da regra de negocio de testar 1 por 1, eu criei um conta
  // para testar se todos os campos estavam limpos.
  const formInputs = document.forms['signUp-form'].getElementsByTagName('input');
  console.log(formInputs);
  for (let index = 0; index < formInputs.length; index += 1) {
    const currentInput = formInputs[index];
    console.log(currentInput);
    if (!currentInput.value) {
      return false;
    } else {
      return true;
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
