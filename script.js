const btnLogin = document.querySelector('#button-login');
const emailPhone = document.querySelector('#user-email-phone');
const btnSignup = document.querySelector('#facebook-register');
const registerForm = document.querySelector('#register-form');

btnLogin.addEventListener('click', function () {
  if (emailPhone.value !== '') {
    alert(emailPhone.value);
  } else {
    alert('Campo Email ou Telefone invalido');
  }
});

btnSignup.addEventListener('click', function () {
  for (let i = 0; i < registerForm.children.length; i += 1) {
    if (registerForm.children[i].tagName !== 'LABEL' && registerForm.children[i].tagName !== 'BUTTON') {
      if (registerForm.children[i].value === '') {
        alert('Campos inválidos');
        break;
      }
    }
  }
});
