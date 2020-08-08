const btnLogin = document.getElementById('button-login');
const txtEmail = document.getElementById('user-email-phone').value;
function printEmail() {
  alert(txtEmail);
}
btnLogin.addEventListener('click', printEmail);
