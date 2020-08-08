document.querySelector('#button-login').addEventListener('click', function () {
  const inputEmail = document.querySelector('#user-email-phone').value;
  alert(inputEmail);
});

function personalizedGender() {
  const newGenre = document.createElement('input');
  newGenre.type = 'text';
  newGenre.name = 'gender';
  newGenre.placeholder = 'Gênero (opcional)';
  document.querySelector('.label-gender').appendChild(newGenre);
}
document.querySelector('.personalizado').addEventListener('click', personalizedGender);
