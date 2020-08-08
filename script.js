const emailCel = document.querySelector('#user-email-phone');
const entrarButton = document.getElementById('button-login');

entrarButton.addEventListener('click', function () {
  alert(emailCel.value);
});
