const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

const fields = [];

const facebookRegister = document.querySelector('#facebook-register');
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
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
  console.log(fields);
  for (let i = 0; i < fields.length; i += 1) {
    if (fields[i] === '') {
      console.log(fields[i]);
      result.innerHTML = 'Campos inválidos';
    }
  }
});
