const btnLogin = document.getElementById('button-login');
function printEmail() {
  alert(document.getElementById('user-email-phone').value);
}
btnLogin.addEventListener('click', printEmail);
