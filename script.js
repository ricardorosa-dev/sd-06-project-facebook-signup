window.onload = function () {
  const entrar = document.querySelector('#button-login');
  const text = document.querySelector('#user-email-phone');
  const gender = document.querySelectorAll('.radio');
  for (let index = 0; index < gender.length; index += 1) {
    gender[index].addEventListener('change', function () {
      const other = document.createElement('input');
      if (gender[2].checked === true) {
        other.name = 'gender-custom';
        other.className = 'other-gender';
        other.placeholder = 'Gênero (opcional)';
        document.querySelector('.option-gender').appendChild(other);
      } else {
        document.querySelector('.option-gender').removeChild(document.querySelector('.other-gender'));
      }
    });
  }
  entrar.addEventListener('click', function () {
    alert(text.value);
  });
  const cadast = document.querySelector('#facebook-register');
  cadast.addEventListener('click', function (event) {
    event.preventDefault();
    const invalid = document.querySelector('#invalid');
    if (document.querySelector('.firstname').value === '' || document.querySelector('.lastname').value === '' || document.querySelector('.phone_email').value === '' || document.querySelector('.password').value === '' || document.querySelector('.birthdate').value === '') {
      invalid.innerText = 'Campos inválidos';
    } else {
      invalid.innerText = '';
    }
  });
};
