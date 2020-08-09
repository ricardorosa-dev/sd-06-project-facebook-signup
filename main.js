const METHOD = function (tagName) { return document.querySelector(tagName); };

const GENDER = METHOD('.gender-container');
const INPUT = document.querySelectorAll('input');
const BTNREGISTER = METHOD('#facebook-register');
let count = 0;

METHOD('#button-login').onclick = () => {
  alert(METHOD('#user-email-phone').value);
};

METHOD('#gender-pers').onchange = () => {
  if (METHOD('.gender-options').children.length === 6) {
    const PERS = document.createElement('input');
    PERS.name = 'gender-custom';
    PERS.placeholder = 'Gênero (opcional)';
    PERS.type = 'text';
    GENDER.appendChild(PERS);
  }
};

function addErrorMsg(check) {
  if (check) {
    const TEXT = document.createElement('p');
    count += 1;

    if (count <= 1) {
      TEXT.innerHTML = 'Campos inválidos';
      GENDER.appendChild(TEXT);
    }
  }
}

BTNREGISTER.onclick = () => {
  let check = false;

  INPUT.forEach((item) => {
    if (item.id !== 'user-email-phone' && item.id !== 'user-password') {
      if (item.value === '') {
        check = true;
      }
    }
  });

  addErrorMsg(check);
};
