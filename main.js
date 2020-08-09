const METHOD = function (tagName) { return document.querySelector(tagName); };

const GENDER = METHOD('.gender-options');

METHOD('#button-login').onclick = () => {
  alert(METHOD('#user-email-phone').value);
};

METHOD('#gender-pers').onchange = () => {
  if (GENDER.children.length === 6) {
    const PERS = document.createElement('input');
    PERS.name = 'gender-custom';
    PERS.placeholder = 'Gênero (opcional)';
    PERS.type = 'text';
    GENDER.appendChild(PERS);
  }
};
