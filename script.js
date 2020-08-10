const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

let fields = [];

fields.push(document.querySelector('#firstname').value);
fields.push(document.querySelector('#lastname').value);
fields.push(document.querySelector('#phoneemail').value);
fields.push(document.querySelector('#password').value);
fields.push(document.querySelector('#birthdate').value);
fields.push(document.querySelector('#gender').value);

const facebookRegister = document.querySelector('#facebook-register');
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event)
  const result = document.querySelector('#result');
  for (let i = 0; i < fields.length; i += 1) {
    if (fields[i] === '') {
      result.innerHTML = 'Campos inválidos';
    }
  }
});
