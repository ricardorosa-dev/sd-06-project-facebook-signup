window.onload = function () {
  const entrar = document.querySelector('#button-login');
  const text = document.querySelector('#user-email-phone');
  const gender = document.querySelectorAll('.radio');

  for (let index = 0; index < gender.length; index += 1) {
    gender[index].addEventListener('change', function () {
      const box = document.querySelector(".option-gender");
      const other = document.createElement("input");
      if (gender[2].checked == true) {
        other.name = 'gender-custom';
        other.className = 'other-gender';
        other.placeholder = 'Gênero (opcional)';
        box.appendChild(other)
      } else {
        box.removeChild(document.querySelector('.other-gender'))
      };
    });
  };

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
