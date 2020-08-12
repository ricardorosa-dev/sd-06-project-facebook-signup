const btnLogin = document.querySelector('#button-login');
const mailEntry = document.querySelector('#user-email-phone');
const btnSignup = document.querySelector('#facebook-register');
const inputsValidate = document.querySelectorAll('.validate-inputs');
const radioBtns = document.querySelectorAll('.radio-inputs');
const btnCustomGender = document.querySelector('#personalizado');

btnLogin.addEventListener('click', function () {
  alert(mailEntry.value);
});

btnSignup.addEventListener('click', function () {
  let temErro = 0;
  for (let i = 0; i < inputsValidate.length; i += 1) {
    if (inputsValidate[i].value === '') {
      temErro = 1;
      break;
    }
  }
  if (radioBtns[0].checked === false && radioBtns[1].checked === false &&
    radioBtns[2].checked === false) {
    temErro = 1;
  }
  if (temErro === 1) {
    alert('Campos inválidos');
  }
});

btnCustomGender.addEventListener('click', function () {
  const radioGender = document.querySelector('.gender-radio');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  radioGender.appendChild(newInput);
});
