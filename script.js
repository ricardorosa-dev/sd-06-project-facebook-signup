window.onload = function() {
  const entrar = document.querySelector('#button-login');
  entrar.addEventListener('click', function() {
    const email = document.querySelector('#user-email-phone');
    alert(email.value);
  });
};
