window.onload = function () {
  for (let index = 0; index < document.querySelectorAll('.radio').length; index += 1) {
    document.querySelectorAll('.radio')[index].addEventListener('change', function () {
      const other = document.createElement('input');
      if (document.querySelectorAll('.radio')[2].checked === true) {
        other.name = 'gender-custom';
        other.className = 'other-gender';
        other.placeholder = 'Gênero (opcional)';
        document.querySelector('.option-gender').appendChild(other);
      } else {
        document.querySelector('.option-gender').removeChild(document.querySelector('.other-gender'));
      }
    });
  }
  document.querySelector('#button-login').addEventListener('click', function () {
    alert(document.querySelector('#user-email-phone').value);
  });
  document.querySelector('#facebook-register').addEventListener('click', function (event) {
    event.preventDefault();
    const invalid = document.querySelector('#invalid');
    if (document.querySelector('.firstname').value === '' || document.querySelector('.lastname').value === '' || document.querySelector('.phone_email').value === '' || document.querySelector('.password').value === '' || document.querySelector('.birthdate').value === '') {
      invalid.innerText = 'Campos inválidos';
    } else {
      invalid.innerText = '';
    }
  });
};
