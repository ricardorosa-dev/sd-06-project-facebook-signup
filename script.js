const btnEntrar = document.getElementById('button-login');
const emailCel = document.querySelector('#user-email-phone-label')

btnEntrar.addEventListener('click', function () {
  alert(emailCel.value);
});
