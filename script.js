const btnLogin = document.getElementById('button-login');

// const txtEmail = document.getElementById('user-email-phone').value;

function printEmail() {
  alert(document.getElementById('user-email-phone').value);
}
btnLogin.addEventListener('click', printEmail);
