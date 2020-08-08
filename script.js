const buttonEnter = document.getElementById('button-login');
const inputEmailOrPhone = document.getElementById('user-email-phone');

buttonEnter.addEventListener('click', () => {
  alert(inputEmailOrPhone.value);
});
