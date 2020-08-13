const loginButton = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');

//  Consulta realizada no PullRequest https://github.com/tryber/sd-06-project-facebook-signup/pull/117/files como referência

function clickButton() {
  alert(userEmailPhone.value);
}

window.onload = function () {
  loginButton.addEventListener('click', clickButton);
};

