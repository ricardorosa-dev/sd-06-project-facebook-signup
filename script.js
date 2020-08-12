const invalidMsg = document.createElement('div');
invalidMsg.innerHTML = 'Campos inválidos';
invalidMsg.className = 'invalidfield';

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function deleteInvalidMsg() {
  if (document.querySelector('.invalidfield')) {
    document.querySelector('.invalidfield').remove();
  }
}

function loginSuccess() {
  const firstName = document.querySelector('.first-name').value;
  const lastName = document.querySelector('.last-name').value;
  const email = document.querySelector('.email').value;
  const birthdate = document.querySelector('.input-birthdate').value;
  const divRight = document.querySelector('.right-content');
  let genderText;
  if (document.getElementById('male').checked) {
    genderText = 'Masculino';
  } else if (document.getElementById('female').checked) {
    genderText = 'Feminino';
  } else {
    genderText = 'Personalizado';
  }
  divRight.innerHTML = `<p class="loginSuccess">Olá, ${firstName}
  ${lastName}<br><br>Email/Telefone:<br>${email}<br><br>Data de Nascimento:<br>
  ${birthdate}<br><br>Gênero:<br>${genderText}</p>`;
}

document.getElementById('custom').addEventListener('click', () => {
  const inputCustom = document.createElement('input');
  inputCustom.placeholder = 'Gênero (opcional)';
  inputCustom.className = 'gender-custom';
  inputCustom.name = 'gender-custom';
  inputCustom.size = '49';
  if (!(document.querySelector('.gender-custom'))) {
    document.getElementById('facebook-register').previousElementSibling.append(inputCustom);
  }
});

document.getElementById('male').addEventListener('click', () => {
  if (document.querySelector('.gender-custom')) {
    document.querySelector('.gender-custom').remove();
  }
});

document.getElementById('female').addEventListener('click', () => {
  if (document.querySelector('.gender-custom')) {
    document.querySelector('.gender-custom').remove();
  }
});

document.getElementById('facebook-register').addEventListener('click', function (event) {
  deleteInvalidMsg();
  const password = document.querySelector('.new-password').value.length;
  const inputs = document.querySelectorAll('input');
  if ((!inputs[2].value) || (!inputs[3].value) || (!inputs[4].value) || (!inputs[5].value) ||
  (!inputs[6].value)) {
    document.querySelector('.sign-in-form').append(invalidMsg);
    event.preventDefault();
  } else if (!(document.getElementById('male').checked || document.getElementById('female').checked ||
    document.getElementById('custom').checked)) {
    document.querySelector('.sign-in-form').append(invalidMsg);
    event.preventDefault();
  } else if (password === 0) {
    document.querySelector('.sign-in-form').append(invalidMsg);
    event.preventDefault();
  }
  loginSuccess();
});
