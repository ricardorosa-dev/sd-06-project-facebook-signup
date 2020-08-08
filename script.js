const btn = document.querySelector('#button-login');

btn.addEventListener('click', function () {
  const valor = document.getElementById('user-email-phone').value;
  alert(valor);
});

  new JustValidate ('.forms', {
    rules: {
      firstname: {
        required: true,
      },
      lastname: {
        required: true,
      },
      phone_email: {
        required: true,
      },
      password: {
        required: true,
      },
      birthdate: {
        required: true,
      },
      genero: {
        required: true,
      },
    },
    messages: {
      firstname: {
        required: 'Campos inválidos'
      },
      lastname: {
        required: 'Campos inválidos'
      },
      phone_email: {
        required: 'Campos inválidos'
      },
      password: {
        required: 'Campos inválidos'
      },
      birthdate: {
        required: 'Campos inválidos'
      },
      genero: {
        required: 'Campos inválidos'
      },
    },
  });
