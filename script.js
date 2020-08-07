const btnLogin = document.querySelector('#button-login');


btnLogin.addEventListener('click', function () {
  if (document.getElementById('user-email-phone').value !== ' ') {
    alert(document.getElementById('user-email-phone').value);
  }
});
