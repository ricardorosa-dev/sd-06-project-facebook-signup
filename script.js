document.getElementById('button-login').addEventListener('click', function () {
  alert(document.querySelector('.user-email-phone').value);
});

document.querySelector('#other').addEventListener('click', function () {
  if (document.querySelector('.gender-container').lastElementChild.className === '') {
    const newField = document.createElement('input');
    newField.placeholder = 'Gênero (opcional)';
    newField.name = 'gender-custom';
    newField.className = 'gender-custom-input';
    document.querySelector('.gender-container').appendChild(newField);
  }
});
