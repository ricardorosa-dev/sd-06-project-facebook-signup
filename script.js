document.querySelector('#button-login').addEventListener('click', function () {
  const inputEmail = document.querySelector('#user-email-phone').value;
  alert(inputEmail);
});

function personalizedGender() {
  if (!document.querySelector('#gender-custom')) {
    const newGenre = document.createElement('input');
    newGenre.name = 'gender-custom';
    newGenre.id = 'gender-custom';
    newGenre.type = 'text';
    newGenre.placeholder = 'Gênero (opcional)';
    document.querySelector('.label-gender').parentNode.appendChild(newGenre);
  }
}
document.querySelector('.Personalizado').addEventListener('click', personalizedGender);

function removeCustom() {
  if (document.querySelector('#gender-custom')) {
    document.querySelector('#gender-custom').parentNode.removeChild(document.querySelector('#gender-custom'));
  }
}

document.querySelector('#Feminino').addEventListener('click', removeCustom);
document.querySelector('#Masculino').addEventListener('click', removeCustom);
