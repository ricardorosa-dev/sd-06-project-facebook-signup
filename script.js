const loginButton = document.getElementById('button-login');

function alertEmail() {
  const userEmail = document.getElementById('user-email-phone');
  alert(userEmail.value);
}

loginButton.addEventListener('click', alertEmail);
