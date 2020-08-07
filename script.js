function buttonLogin() {
  const botaoEntrar = document.getElementById('button-login');
  const inputEmail = document.getElementById('user-email-phone');

  botaoEntrar.addEventListener('click', function () {
   window.alert(inputEmail.value);
});
}

window.onload = function () {
  buttonLogin();
};
