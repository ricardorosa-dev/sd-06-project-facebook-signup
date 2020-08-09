function substituir() {
  for (let index = 0; index < document.querySelectorAll('.radio').length; index += 1) {
    if (document.querySelectorAll('.radio')[index].checked === true) {
      document.querySelectorAll('.radio')[index].id = 'checked';
    }
  }
  const newBox = document.createElement('p');
  const right = document.querySelector('.right-content');
  const text = `Olá, ${document.querySelector('.firstname').value} ${document.querySelector('.lastname').value} E-mail ou telefone: ${document.querySelector('.phone_email').value} Data de Nascimento: ${document.querySelector('.birthdate').value} Gênero: ${document.querySelector('#checked').value}`;
  right.innerHTML = '';
  newBox.appendChild(document.createTextNode(text));
  right.appendChild(newBox);
}

window.onload = function () {
  const other = document.createElement('input');
  other.className = 'other-gender';
  other.name = 'gender-custom';
  other.placeholder = 'Gênero (opcional)';
  for (let index = 0; index < document.querySelectorAll('.radio').length; index += 1) {
    document.querySelectorAll('.radio')[index].addEventListener('change', function () {
      if (document.querySelectorAll('.radio')[2].checked === true) {
        document.querySelector('.option-gender').appendChild(other);
      } else if (document.querySelector('.other-gender')) {
        document.querySelector('.option-gender').removeChild(document.querySelector('.other-gender'));
      }
    });
  }
  document.querySelector('#button-login').addEventListener('click', function () {
    alert(document.querySelector('#user-email-phone').value);
  });
  document.querySelector('#facebook-register').addEventListener('click', function (event) {
    event.preventDefault();
    if (document.querySelector('.firstname').value === '' || document.querySelector('.lastname').value === '' || document.querySelector('.phone_email').value === '' || document.querySelector('.password').value === '' || document.querySelector('.birthdate').value === '') {
      document.querySelector('#invalid').innerText = 'Campos inválidos';
    } else {
      document.querySelector('#invalid').innerText = '';
      substituir();
    }
  });
};
