const btnEntrar = document.getElementById('button-login');
const emailCel = document.getElementById('user-email-phone-label');

btnEntrar.addEventListener('click', function () {
  alert(emailCel.value);
});
