function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

window.onload = function () {
  const button = document.getElementById('button-login');
  button.addEventListener('click', loginButton);
};

