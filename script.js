const login = document.querySelector('#button-login');
login.addEventListener('click', function () {
  const loginValue = document.querySelector('#user-email-phone').value;
  alert(loginValue);
});
function validFields () {
  const inputs = document.querySelectorAll('.inputs-register');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].checkValidity() === false) {
      return false
    }
  }
}
const register = document.querySelector('#facebook-register');
register.addEventListener('click', function () {
  if (validFields() === false) {
    const form = document.querySelector('.register');
    const message = document.createElement('p');
    message.innerHTML = 'Campos inválidos';
    form.appendChild(message);
  }
});