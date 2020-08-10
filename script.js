const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', () => {
  const emailPhoneValue = document.getElementById('user-email-phone').value;
  alert(emailPhoneValue);
});
document.getElementById('facebook-register').addEventListener('click', function() {
  let nome = document.getElementById('firstname').value;
  let sobreNome = document.getElementById('lastname').value;
  let celularEmail = document.getElementById('phone_email').value;
  let senha = document.getElementById('password').value;
  let nascimento = document.getElementById('birthdate').value;
  let genero = document.getElementById('feminino').value;
  if ((nome === '') || (sobreNome === '') || (celularEmail === '') || (senha === '') || (nascimento === '') || (genero === '')) {
    alert('Campos inválidos');
  }
});
