function loginAlert() {
  const email = document.querySelector('#user-email-phone').value;
  alert(email);
}

function showInvalidFieldsError() {
  const errorSpan = document.getElementById('signUp-error');
  errorSpan.innerHTML = 'Campos inválidos';
}

function hideInvalidFieldsError() {
  const errorSpan = document.getElementById('signUp-error');
  errorSpan.innerHTML = '';
}

function createTableInfo() {
  // recupera todos os valores
  const firstName = document.querySelector('.input-first-name').value;
  const lastName = document.querySelector('.input-last-name').value;
  const cellNumber = document.getElementById('cel_number').value;
  const birthday = document.querySelector('.birthdate').value;
  // recupera o valor do radio button , precisa fazer teste para saber ql esta marcado
  const valido = document.getElementsByName('gender');
  if (valido[0].checked) {
    const gender = valido[0].value;
  } else if (valido[1].checked) {
    const gender = valido[1].value;
  } else if (valido[2].checked) {
    const gender = document.getElementById('gender-custom-id').value;
  }
  // recupera o pai para a gente add a nova rightcontent
  const pai = document.querySelector('.main-content');
  // apaga o lado direito inteiro de uma vez
  document.querySelector('.right-content').remove();
  // cria nova div e add no pai
  const div = document.createElement('div');
  div.className = 'right-content';
  pai.appendChild(div);
  // cria o novo paragrafo que é o resultado e add na div
  const paragraph = document.createElement('h1');
  div.appendChild(paragraph);
  paragraph.innerText = `Olá, ${firstName} ${lastName}, seu login é: ${cellNumber}, sua data
  de aniversário é: ${birthday} e seu gênero é: ${gender}`;
}

function validateInputs() {
  // por conta da regra de negocio de testar 1 por 1, eu criei um conta
  // para testar se todos os campos estavam limpos.
  const formInputs = document.forms['signUp-form'].getElementsByTagName('input');
  let cont = 0;
  for (let index = 0; index < formInputs.length; index += 1) {
    const currentInput = formInputs[index];
    if (!currentInput.value) {
      showInvalidFieldsError();
      break;
    } else {
      hideInvalidFieldsError();
      cont += 1;
    }
  }
  if (cont === 8) {
    createTableInfo();
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
  if (document.getElementById('custom').checked) {
    const customGenderField = createCustomGenderField();
    const signUpForm = document.getElementById('gender-selection');
    signUpForm.after(customGenderField);
  }
}

function delCustomGender() {
  if (document.getElementById('gender-custom-id')) {
    document.getElementById('gender-custom-id').remove();
  }
}

window.onload = function () {
  const loginBtn = document.querySelector('#button-login');
  loginBtn.addEventListener('click', loginAlert);

  const signUpBtn = document.getElementById('facebook-register');
  signUpBtn.addEventListener('click', function (event) {
    event.preventDefault();
    validateInputs();
  });
};
