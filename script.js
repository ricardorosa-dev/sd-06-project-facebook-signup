const login = document.querySelector('#button-login');
login.addEventListener('click', function () {
  const loginValue = document.querySelector('#user-email-phone').value;
  alert(loginValue);
});
