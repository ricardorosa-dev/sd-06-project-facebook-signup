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

document.getElementById('facebook-register').addEventListener('click', function () {
  deleteInvalidMsg();
  const password = document.querySelector('.new-password').value.length;
  const inputs = document.querySelectorAll('input');
  for (let i = 2; i < inputs.length; i += 1) {
    if (inputs[i].value === null) {
      document.querySelector('.sign-in-form').append(invalidMsg);
    }
  }
  if (document.getElementById('male').checked || document.getElementById('female').checked ||
        document.getElementById('custom').checked) {
    // Não fazer nada.
  } else {
    document.querySelector('.sign-in-form').append(invalidMsg);
  }
  if (password === 0) {
    document.querySelector('.sign-in-form').append(invalidMsg);
  }
});

document.getElementById('custom').addEventListener('click', () => {
  const inputCustom = document.createElement('input');
  inputCustom.placeholder = 'Gênero (opcional)';
  inputCustom.className = 'gender-custom';
  inputCustom.name = 'gender-custom';
  inputCustom.size = '49';
  if (document.querySelector('.gender-custom')) {
    // Não fazer nada.
  } else {
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
  divRight.innerHTML = `<p class = "loginSuccess">Olá, ${firstName} ${lastName}<br><br>Email/Telefone:<br>${email}<br><br>Data de Nascimento:<br>${birthdate}<br><br>Gênero:<br>${genderText}</p>`;
}

document.getElementById('facebook-register').addEventListener('click', (event) => {
  event.preventDefault();
  loginSuccess();
});
