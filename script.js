const login = document.getElementById('button-login');
const nome = document.getElementById('user-email-phone');

login.addEventListener('click', function () {
  alert(nome.value);
});
