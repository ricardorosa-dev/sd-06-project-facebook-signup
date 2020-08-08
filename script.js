//  Variáveis
const buttonEnter = document.querySelector('#button-login');
const nameInput = document.querySelector('#firstname');
const lastnameInput = document.querySelector('#lastname');
const phoneOrEmailInput = document.querySelector('#phone_email');
const passwordInput = document.querySelector('#password');
const birthdateInput = document.querySelector('#birthdate');
const femaleInput = document.querySelector('#gender-female');
const maleInput = document.querySelector('#gender-male');
const personalizedInput = document.querySelector('#gender-personalized');
const formRegister = document.querySelector('#form-register');
const buttonRegister = document.querySelector('#facebook-register');

//  Criar um alerta ao clicar em 'Entrar'
buttonEnter.addEventListener('click', function () {
  const nameOrPhone = document.querySelector('#user-email-phone').value;
  alert(nameOrPhone);
});

// Exibir uma mensagem de "Campos inválidos" se pelo menos um campo não esteja preenchido
const inputElements = document.querySelectorAll('.input-element');
buttonRegister.addEventListener('click', function (e) {
  e.preventDefault ();
  for (let index = 0; index < inputElements.length; index += 1) {
     if (inputElements[index].value === '') {
       const messageDiv = document.querySelector('.empty-input');
       messageDiv.innerHTML = 'Campos inválidos';
     }
  }
})
