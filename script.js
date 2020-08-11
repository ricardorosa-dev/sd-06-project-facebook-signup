const buttonEnter = document.querySelector('.button-login');
const textEmailTel = document.getElementById('user-email-phone');

function alertEmail() {
  alert(textEmailTel.value);
}

buttonEnter.addEventListener('click', alertEmail);

const radioFields = document.querySelectorAll('input[name="gender"]');
radioFields.forEach((field) => {
  field.addEventListener('click', function () {
    if (field.id === 'personalizado' && field.checked) {
      const newfield = document.createElement('input');
      newfield.type = 'text';
      newfield.className = 'normal_inp';
      newfield.placeholder = 'Gênero (opcional)';
      newfield.name = 'gender-custom';

      const addGenderField = document.querySelector('#person-field');
      addGenderField.innerHTML = '';
      addGenderField.appendChild(newfield);
    } else {
      const addGenderField = document.querySelector('#person-field');
      addGenderField.innerHTML = '';
    }
  });
});

function genderFieldFunc() {
  let selected = '';
  for (let i = 0; i < 3; i += 1) {
    if (document.getElementsByName('gender')[i].checked) {
      selected = document.getElementsByName('gender')[i].value;
    }
  }
  return selected;
}

function insertContent(list) {
  document.querySelector('.right-content').innerHTML = '';
  const data = `Olá, ${list[0]} ${list[1]}, ${list[2]}, ${list[4]}, ${list[5]}`;
  const p = document.createElement('p');
  p.appendChild(document.createTextNode(data));
  document.querySelector('.right-content').appendChild(p);
  // p.innerHTML = `Olá, ${list[0]} ${list[1]}, ${list[2]}, ${list[4]}, ${list[5]}`;
  // document.querySelector('.right-content').appendChild(p);
  // const p1 = document.createElement('p');
  // p1.innerHTML = `Olá, ${list[0]} ${list[1]}`;
  // document.querySelector('.right-content').appendChild(p1);
  // const p2 = document.createElement('p');
  // p2.innerHTML = `${list[2]}`;
  // document.querySelector('.right-content').appendChild(p2);
  // const p3 = document.createElement('p');
  // p3.innerHTML = `${list[4]}`;
  // document.querySelector('.right-content').appendChild(p3);
  // const p4 = document.createElement('p');
  // p4.innerHTML = `${list[5]}`;
  // document.querySelector('.right-content').appendChild(p4);
}

const btRegister = document.getElementById('facebook-register');
btRegister.addEventListener('click', (e) => {
  e.preventDefault();
  const fnameField = document.getElementsByName('firstname')[0].value;
  const lnameField = document.getElementsByName('lastname')[0].value;
  const celField = document.getElementsByName('phone_email')[0].value;
  const passField = document.getElementsByName('password')[1].value;
  const birthdate = document.getElementsByName('birthdate')[0].value;
  const genderField = genderFieldFunc();

  const list = [fnameField, lnameField, celField, passField, birthdate, genderField];
  let formOk = true;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === '') {
      formOk = false;
      break;
    }
  }
  if (formOk === true) {
    insertContent(list);
  } else {
    const errorMsg = document.getElementById('field_error');
    errorMsg.style.color = 'red';
    errorMsg.innerHTML = 'Campos inválidos';
  }
});
