const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
// const userPassword = document.getElementById('user-password');
// const nome = document.getElementById('nome');
// const sobrenome = document.getElementById('sobrenome');
// const celularEmail = document.getElementById('celularEmail');
// const customRadio = document.getElementById('custom');


//  Consulta realizada no PullRequest https://github.com/tryber/sd-06-project-facebook-signup/pull/117/files como referência

function clickButton() {
  alert(userEmailPhone.value);
}

window.onload = function () {
  buttonLogin.addEventListener('click', clickButton);
};
