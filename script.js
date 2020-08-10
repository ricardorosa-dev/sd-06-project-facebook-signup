const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', () => {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
});

