window.onload = function () {
  const entrar = document.querySelector('#button-login');
  const text = document.querySelector('#user-email-phone');
  entrar.addEventListener('click', function () {
    alert(text.value);
  });
};
