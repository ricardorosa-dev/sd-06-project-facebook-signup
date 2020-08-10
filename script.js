const entrar = document.getElementById('button-login');
function entrada() {
  const emailTelefone = document.getElementById('user-email-phone').value;
  alert(emailTelefone);
}
entrar.addEventListener('click', entrada);
