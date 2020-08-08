const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const inputEmail = document.getElementById('user-email-phone').value;
  window.alert(inputEmail);
  inputEmail.innerHTML = '';
});
