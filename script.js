//  Variáveis
const buttonEnter = document.querySelector('#button-login');

//  Criar um alerta ao clicar em 'Entrar'
buttonEnter.addEventListener('click', function () {
  const nameOrPhone = document.querySelector('#user-email-phone').value;
  alert(nameOrPhone);
});
