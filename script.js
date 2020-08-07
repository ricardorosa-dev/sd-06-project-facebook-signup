function loginAlert() {
  const email = document.querySelector('#user-email-phone').value;
  alert(email);
}

window.onload = function () {
  const loginBtn = document.querySelector('#button-login');
  loginBtn.addEventListener('click', loginAlert);
}
