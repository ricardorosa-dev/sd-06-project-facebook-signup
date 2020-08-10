document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));

const data = document.querySelectorAll('input');
let isEmpty = 0;
const errorSpan = document.querySelector('#error-span');
const selectedGenderSpan = document.querySelector('#selected-gender');

for (let i = 7; i < 10; i += 1) {
  data[i].addEventListener('click', () => {
    selectedGenderSpan.value = document.querySelector('input:checked').value;
    if (selectedGenderSpan.value === 'Personalizado') {
      selectedGenderSpan.classList.toggle('hidden');
      selectedGenderSpan.value = '';
    }
  });
}

function checkContent() {
  for (let i = 2; i < data.length; i += 1) {
    if (data[i].value === '') {
      isEmpty += 1;
    }
    if (selectedGenderSpan.value === '') {
      isEmpty += 1;
    }
  }
  return isEmpty;
}

function isAnyFieldEmpty() {
  if (checkContent()) {
    errorSpan.innerText = 'Campos inválidos';
    data.forEach((element) => {
      element.addEventListener('click', () => {
        errorSpan.innerText = '';
        isEmpty = 0;
      });
    });
  }
}

function replaceRightContent() {
  const userInfo = {
    name: document.querySelector('#first-name').value,
    lastName: document.querySelector('#last-name').value,
    email: document.querySelector('#user-email').value,
    birth: document.querySelector('#user-birthdate').value,
    gender: document.querySelector('#selected-gender').value,
  };
  document.querySelector('.right-content').innerText = `
  Nome: ${userInfo.name} ${userInfo.lastName}
  Email: ${userInfo.email}
  Aniversario:${userInfo.birth}
  Genero:${userInfo.gender}
  `;
}

document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  isAnyFieldEmpty();
  replaceRightContent();
});
