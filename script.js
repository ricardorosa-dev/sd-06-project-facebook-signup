const buttonLogin = document.querySelector('#button-login');
const inputUser = document.querySelector('#user-email-phone');
const inputPassword = document.querySelector('#user-password');

buttonLogin.addEventListener('click', function () {
  let login = true;
  if (inputUser.value === '') {
    alert('Campo Email ou Telefone precisa ser preenchido Por Favor');
    login = false;
  } else {
    login = true;
  }
  if (inputPassword.value === '') {
    alert('Campo senha precisa ser preechido');
    login = false;
  } else {
    login = true;
  } if (login === true) {
    alert(`Login Efetuado Usuário:  ${inputUser.value}`);
  }
});
