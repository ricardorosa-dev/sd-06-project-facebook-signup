const buttonEnter = document.querySelector('.button-login');
const textEmailTel = document.getElementById('user-email-phone');
const buttonRegister = document.getElementById('facebook-register');
const firstnameField = document.getElementsByName('firstname')[0].value !== '';
const lastnameField = document.getElementsByName('lastname')[0].value !== '';
const phoMailField = document.getElementsByName('phone_email')[0].value !== '';
const passwField = document.getElementsByName('password')[0].value !== '';
const birthField = document.getElementsByName('birthdate')[0].value !== '';
const clickPersonalizado = document.getElementById('optional');
const divOptionalGenre = document.getElementById('newGender');

function alertEmail() {
  alert(textEmailTel.value);
}

buttonEnter.addEventListener('click', alertEmail);

buttonRegister.addEventListener('click', function () {
  const genreField = function () {
    let result = false;
    for (let i = 0; i < 3; i += 1) {
      if (document.getElementsByName('gender')[i].checked) {
        result = true;
      }
    }
    return result;
  };
  const fields = [firstnameField, lastnameField, phoMailField, passwField, birthField, genreField];
  let filled = true;
  for (let i = 0; i < fields.length; i += 1) {
    if (fields[i] === false) {
      filled = false;
      break;
    }
  }
  if (filled === true) {
    document.getElementsByClassName('right-content')[0].innerHTML = 'Criar uma função para item 20';
  } else {
    const errorMsg = document.getElementById('field_error');
    errorMsg.style.color = 'red';
    errorMsg.innerHTML = 'Campos inválidos';
  }
});

function OptionalGenre() {
  const newElement = document.createElement('input');
  newElement.type = 'text';
  newElement.name = 'gender-custom';
  newElement.placeholder = 'Gênero (opcional)';
  divOptionalGenre.appendChild(newElement);
}

clickPersonalizado.addEventListener('click', OptionalGenre);
//só um comentário para desbugar o Code Climate
