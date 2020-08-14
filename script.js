function btnEntrarAlert() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', () => { alert(document.querySelector('#user-email-phone').value); });
}
window.onload = function () {
  btnEntrarAlert();
};
