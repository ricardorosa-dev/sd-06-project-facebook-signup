const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const userPassword = document.querySelector('#user-password');

buttonLogin.addEventListener('click', () => {
  if (userEmailPhone.value.length === 0 && userPassword.value.length === 0) {
    alert('Você precisa preencher seu e-mail e senha');
  } else if (userEmailPhone.value.length !== 0 && userPassword.value.length === 0) {
    alert('Você não preencheu sua senha');
  } else if (userEmailPhone.value.length === 0 && userPassword.value.length !== 0) {
    alert('Você não preencheu seu e-mail');
  } else {
    alert(`Seu email é: ${userEmailPhone.value}
sua senha é: ${userPassword.value}`);
  }
});
