/*
  mapeando elementos da pagina e colocando em constantes
*/

const btnLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const customRadio = document.getElementById('custom');
const genderCustom = document.querySelector('.custom-option');

// exibindo um alerta ao clicar em um botao
function clickButton() {
  // exibe uma mensagem com o valor do email-phone
  alert(userEmailPhone.value);
}

// exibe um text-input depois que é clicado na opção personalizado
function customOption() {
  // cria um elemento text-input na página
  const createCustom = document.createElement('input');
  // adiconando atributos no text-input
  createCustom.name = 'gender-custom';
  createCustom.placeholder = 'Gênero (opcional)';
  // mostrando na pagina
  genderCustom.appendChild(createCustom);
}

window.onload = function () {
  // adicionando um evento no elemento btnLogin
  btnLogin.addEventListener('click', clickButton);
  // adicionando um evento no elemento customRadio
  customRadio.addEventListener('change', customOption);
};
