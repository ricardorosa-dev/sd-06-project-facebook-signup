const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

const fields = [];

const facebookRegister = document.querySelector('#facebook-register');
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  let success = true;
  let dataUser = 'Olá, ';
  fields.push(document.querySelector('#firstname').value);
  fields.push(document.querySelector('#lastname').value);
  fields.push(document.querySelector('#phoneemail').value);
  fields.push(document.querySelector('#password').value);
  fields.push(document.querySelector('#birthdate').value);
  dataUser += `${fields[0]} ${fields[1]}<br>`;
  dataUser += `${fields[2]}<br>`;
  dataUser += `${fields[4]}<br>`;
  if (document.querySelector('#feminino').checked === true) {
    fields.push(document.querySelector('#feminino').value);
    dataUser += `${fields[5]}<br>`;
  } else if (document.querySelector('#masculino').checked === true) {
    fields.push(document.querySelector('#masculino').value);
    dataUser += `${fields[5]}<br>`;
  } else if (document.querySelector('#personalizado').checked === true) {
    fields.push(document.querySelector('#personalizado').value);
    dataUser += `${fields[5]}: `;
    dataUser += document.querySelector('#gender-custom').value;
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
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = dataUser;
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
