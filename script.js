const btnLogin = document.querySelector('#button-login');
const emailPhone = document.querySelector('#user-email-phone');
const btnSignup = document.querySelector('#facebook-register');
const registerForm = document.querySelector('#register-form');
const custom = document.querySelector('#custom');

btnLogin.addEventListener('click', function () {
  if (emailPhone.value !== '') {
    alert(emailPhone.value);
  } else {
    alert('Campo Email ou Telefone invalido');
  }
});

btnSignup.addEventListener('click', function (e) {
  for (let i = 0; i < registerForm.children.length; i += 1) {
    if (registerForm.children[i].required === true) {
      if (registerForm.children[i].value === '') {
        alert('Campos inválidos');
        break;
      }
    }
  }
  e.preventDefault();
});

custom.addEventListener('click', function () {
  const inputCustom = document.createElement('input');
  inputCustom.name = 'gender-custom';
  inputCustom.placeholder = 'Gênero (opcional)';
  registerForm.insertBefore(inputCustom, registerForm.children[registerForm.children.length - 1]);
});
