function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

function validateRadio() {
  const radio = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  return radio[0].checked || radio[1].checked || radio[2].checked;
}

function validateDate() {
  const date = document.querySelectorAll('form')[1].querySelectorAll('input[type=date]')[0];
  return date.value !== '';
}

function validateText() {
  const text = document.querySelectorAll('form')[1].querySelectorAll('input[type=text]');
  return text[0].value !== '' && text[1].value !== '' && text[2].value !== '';
}

function validatePassword() {
  const password = document.querySelectorAll('form')[1].querySelectorAll('input[type=password]')[0];
  return password.value !== '';
}

function validate(event) {
  event.preventDefault();
  const radio = validateRadio();
  const password = validatePassword();
  const text = validateText();
  const date = validateDate();
  if (!radio || !password || !text || !date) {
    if (document.getElementById('validateDiv').childNodes.length !== 0) {
      const oldP = document.getElementsByTagName('p');
      document.getElementById('validateDiv').removeChild(oldP);
    }

    const p = document.createElement('p');
    p.innerText = 'Campos inválidos';
    document.getElementById('validateDiv').appendChild(p);
  }
  else {
    saveContent ();
    newContent ();
  }
}

function otherButton() {
  const radio = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  const divOther = document.getElementById('other-option');
  if (radio[2].checked) {
    if (divOther.childNodes.length !== 0) {
      const oldInput = document.getElementsByTagName('input');
      divOther.removeChild(oldInput);
    }
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'gender-custom');
    input.setAttribute('placeholder', 'Gênero (opcional)');
    divOther.appendChild(input);
  }
}

function saveContent () {
  let firstName = document.getElementById('firstname').value;
  let lastName = document.getElementById('lastname').value;
  let phone_email = document.getElementById('phone_email').value;
  let birthDate = document.getElementById('birthdate').value;
  let radioButtonOption = document.querySelectorAll('form')[1].querySelectorAll('input[type=radio]');
  let radioButtonOptionSave
  for(i = 0; i < radioButtonOption.length; i++) { 
    if(radioButtonOption[i].checked) 
    radioButtonOptionSave = radioButtonOption[i].value
  }
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('phone_email', phone_email);
  localStorage.setItem('birthdate', birthDate);
  localStorage.setItem('gender', radioButtonOptionSave);
}

function newContent () {
  let divRight = document.getElementsByClassName('right-content');
  const divValidate = document.getElementById('validateDiv');
  if (divValidate !== '') {
    divRight.innerHTML = '';

    let helloText = document.createElement('p');
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');

    helloText.innerText = `Olá, ${firstName} ${lastName}`;
    divRight.appendChild(helloText);
    
    let johnDoeTelephone = document.createElement('p');
    let phone_email = localStorage.getItem('phone_email');
    johnDoeTelephone.innerText = phone_email.value;
    divRight.appendChild(johnDoeTelephone);

    let johnDoeBirthDate = document.createElement('p');
    let birthdate = localStorage.getItem('birthdate');
    johnDoeBirthDate.innerText = birthdate.value;
    divRight.appendChild(johnDoeBirthDate);

    let johnDoeGender = document.createElement('p');
    let gender = localStorage.getItem('gender');
    johnDoeGender.innerText = gender.value;
    divRight.appendChild(johnDoeGender);
    
  }
}


window.onload = function () {
  const button = document.getElementById('button-login');
  const registerButton = document.getElementById('facebook-register');
  const personalizedButton = document.getElementById('other');
  button.addEventListener('click', loginButton);
  registerButton.addEventListener('click', validate);
  personalizedButton.addEventListener('click', otherButton);
};
