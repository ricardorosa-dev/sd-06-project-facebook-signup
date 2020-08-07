const button = document.querySelector('#button-login');

button.addEventListener('click', function () {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
});
