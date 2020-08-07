const login = document.querySelector('#button-login');
login.addEventListener('click', function () {
  const loginValue = document.querySelector('#user-email-phone').value;
  alert(loginValue);
});
function validFields() {
  const inputs = document.querySelectorAll('.inputs-register');
  let result = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].checkValidity() === false) {
      result = false;
    }
  }
  return result;
}
const register = document.querySelector('#facebook-register');
register.addEventListener('click', function (evt) {
  if (validFields() === false) {
    const form = document.querySelector('.register');
    const message = document.createElement('p');
    message.innerHTML = 'Campos inválidos';
    form.appendChild(message);
  } else {
    evt.preventDefault();
    let firstname = document.querySelectorAll('.inputs-register')[0].value;
    let lastname = document.querySelectorAll('.inputs-register')[1].value;
    let contact = document.querySelectorAll('.inputs-register')[2].value;
    let birthDate = document.querySelectorAll('.inputs-register')[4].value;
    //let gender = document.querySelector('.gender:checked').value;
    document.querySelector('.right-content').remove();
    let contentRight = document.createElement('div');
    contentRight.className = 'right-content';
    let paragraph1 = document.createElement('p');
    paragraph1.innerHTML = `Olá, ${firstname} ${lastname}`;
    contentRight.appendChild(paragraph1);
    let paragraph2 = document.createElement('p');
    paragraph2.innerHTML = contact;
    contentRight.appendChild(paragraph2);
    let paragraph3 = document.createElement('p');
    paragraph3.innerHTML = birthDate;
    contentRight.appendChild(paragraph3);
    document.querySelector('.main-content').appendChild(contentRight);
  }
});
const personalized = document.querySelector('#personalizado');
personalized.addEventListener('click', function () {
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.name = 'gender-custom';
  newField.placeholder = 'Gênero (opcional)';
  const genderFather = document.querySelector('.other-fields');
  genderFather.insertBefore(newField, document.querySelector('#facebook-register'));
});
