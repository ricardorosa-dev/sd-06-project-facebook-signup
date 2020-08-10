document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));

let data = document.querySelectorAll('input');
let isEmpty = 0;
const errorSpan = document.querySelector('#error-span');
const selectedGenderSpan = document.querySelector('#selected-gender');

for (let i = 7; i < 9; i += 1) {
  data[i].addEventListener('click', () => {
    selectedGenderSpan.value = document.querySelector('input:checked').value;
  })
}

// Verifica se o campo é vazio
function checkContent() {
  for (let i = 2; i < 7; i += 1) {
    if (data[i].value === '') {
      isEmpty += 1;
    } else if (selectedGenderSpan.value = '') {
      isEmpty += 1;
    }
  };
  return isEmpty;
}

// Se tiver algum vazio, ele coloca o erro no span
function isAnyFieldEmpty() {
  if (checkContent()) {
    errorSpan.innerText = 'Campos inválidos';
    data.forEach(element => {
      element.addEventListener('click', () => {
        errorSpan.innerText = '';
      })
    });
  };
}

document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  isAnyFieldEmpty();
  console.log('click register')
})
