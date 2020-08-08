window.onload = function () {
  // FUNÇÃO PARA O BOTÃO ENTRAR
  const warning = document.getElementById('button-login');
  warning.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
};
