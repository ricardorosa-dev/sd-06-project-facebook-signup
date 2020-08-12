const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});
