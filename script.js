document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

window.onload = function () {
  new JustValidate('.facebook-form', {
    rules: {
      nome: {
        required : true
      },
      sobrenome: {
        required : true
      },
      phone: {
        required: true
      },
      password: {
        required : true
      },
      date: {
        required : true
      },
      radio: {
        required : true
      },
    },
    messages: {
      nome: {
        required : 'Campos Inválidos'
      },
      sobrenome: {
        required : 'Campos Inválidos'
      },
      phone: {
        required : 'Campos Inválidos'
      },
      password: {
        required : 'Campos Inválidos'
      },
      date: {
        required : 'Campos Inválidos'
      },
      radio: {
        required : 'Campos Inválidos'
      },
    },
    submitHandler: function (form, values) {

    },
  });
}
