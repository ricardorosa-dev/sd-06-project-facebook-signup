window.onload = function () {
  const formButton = document.querySelector('#button-login');
  formButton.addEventListener('click', function () {
    const inputEmailValue = document.querySelector('#user-email-phone');
    alert(inputEmailValue.value);
  });
};

const newUserButton = document.querySelector('#facebook-register');
const camps = document.querySelectorAll('.required');
newUserButton.addEventListener('click', function () {
  for (let i = 0; i < camps.length; i += 1) {
    if (camps[i].value === "") {
      alert('Campos inválidos');
      break
    }
  }
})
