window.onload = () => {
  const button = document.getElementById('button-login');
  button.addEventListener('click', () => {
    const emailTelefone = document.getElementById('user-email-phone').value;
    alert(emailTelefone);
  });
};
const btn = document.getElementById('facebook-register');
const form = document.getElementsByClassName('inputs')[0];
const message = document.createElement('p');
message.innerHTML = 'Campos inválidos';
const allText = document.querySelectorAll('.input-text');
btn.addEventListener('click', function () {
  for (let i = 0; i < allText.length; i += 1) {
    if (allText[i].value === '') {
      form.appendChild(message);
    } else if (document.inputs.gender.value === '') {
      form.appendChild(message);
    }
  }
});
