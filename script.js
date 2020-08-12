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
const perso = document.getElementById('others');
const localPerso = document.createElement('input');
localPerso.name = 'genre-custom';
localPerso.placeholder = 'Gênero(opcional)';
const contaiGender = document.getElementsByClassName('gender-container')[0];
perso.addEventListener('click', function () {
  contaiGender.appendChild(localPerso);
  contaiGender.insertBefore(localPerso, btn);
});
