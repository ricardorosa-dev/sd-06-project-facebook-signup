document.querySelector('#button-login').addEventListener('click', function () {
  const inputEmail = document.querySelector('#user-email-phone').value;
  alert(inputEmail);
});

function personalizedGender() {
  const newGenre = document.createElement('input');
  newGenre.name = 'gender-custom';
  newGenre.type = 'text';
  newGenre.placeholder = 'Gênero (opcional)';
  const botao = document.querySelector('#facebook-register');
  document.querySelector('.form-content').insertBefore(newGenre, botao);
}
document.querySelector('.Personalizado').addEventListener('click', personalizedGender);
