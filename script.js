window.onload = function () {
  const entrar = document.querySelector('#button-login');
  const text = document.querySelector('#user-email-phone');
  entrar.addEventListener('click', function () {
    alert(text.value);
  });
  const cadast = document.querySelector('#facebook-register');

  cadast.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.querySelector('.firstname');
    const lastname = document.querySelector('.lastname');
    const phone = document.querySelector('.phone_email');
    const password = document.querySelector('.password');
    const birth = document.querySelector('.birthdate');
    const invalid = document.querySelector('#invalid');
    if (name.value === '' || lastname.value === '' || phone.value === '' || password.value === '' || birth.value === '') {
      invalid.innerText = 'Campos inválidos';
    } else {
      invalid.innerText = '';
    }
  });
};
