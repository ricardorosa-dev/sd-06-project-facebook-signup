
flatpickr('#birthdate', {
  dateFormat: 'd-m-Y'
});

function returnData(fields) {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  for (let index = 1; index < fields.length; index += 1) {
    if (index === 1) {
      const p = document.createElement('p');
      p.innerHTML = `Olá, ${fields[0]} ${fields[1]}`;
      rightContent.appendChild(p);
    } else if (index !== 3) {
      const p2 = document.createElement('p');
      p2.innerHTML = fields[index];
      rightContent.appendChild(p2);
    }
  }
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

const facebookRegister = document.querySelector('#facebook-register');
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const fields = [];
  let success = true;
  fields.push(document.querySelector('#firstname').value);
  fields.push(document.querySelector('#lastname').value);
  fields.push(document.querySelector('#phoneemail').value);
  fields.push(document.querySelector('#password').value);
  fields.push(document.querySelector('#birthdate').value);
  if (document.querySelector('#feminino').checked === true) {
    fields.push(document.querySelector('#feminino').value);
  } else if (document.querySelector('#masculino').checked === true) {
    fields.push(document.querySelector('#masculino').value);
  } else if (document.querySelector('#personalizado').checked === true) {
    fields.push(document.querySelector('#personalizado').value);
  } else {
    fields.push('');
  }
  const result = document.querySelector('#result');
  for (let i = 0; i < fields.length; i += 1) {
    if (fields[i] === '') {
      result.innerHTML = 'Campos inválidos';
      success = false;
    }
  }
  if (success) {
    returnData(fields);
  }
});

const clickFeminino = document.querySelector('#feminino');
clickFeminino.addEventListener('change', function () {
  const divGender = document.querySelector('.gender-custom');
  divGender.style.display = 'none';
});

const clickMasculino = document.querySelector('#masculino');
clickMasculino.addEventListener('change', function () {
  const divGender = document.querySelector('.gender-custom');
  divGender.style.display = 'none';
});

const clickGender = document.querySelector('#personalizado');
clickGender.addEventListener('change', function () {
  const divGender = document.querySelector('.gender-custom');
  divGender.style.display = 'block';
});
