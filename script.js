const botao = document.querySelector('#button-login');
const inputEmailPhone = document.querySelector('#user-email-phone');
botao.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});
