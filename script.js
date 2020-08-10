let errors = 0;
const info = [];
const date = document.forms[1].elements[4];

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

document.forms[1].elements[5].addEventListener('click', function () {
  document.getElementById('gender-custom').style.display = 'none';
});

document.forms[1].elements[6].addEventListener('click', function () {
  document.getElementById('gender-custom').style.display = 'none';
});

document.forms[1].elements[7].addEventListener('click', function () {
  document.getElementById('gender-custom').style.display = 'block';
});

date.addEventListener('keyup', function () {
  if (date.value.length === 2 || date.value.length === 5) {
    date.value += '/';
  }
});

function radioCheck() {
  if (document.forms[1].elements[5].checked) {
    document.forms[1].elements[6].value = ' ';
    document.forms[1].elements[7].value = ' ';
  } else if (document.forms[1].elements[6].checked) {
    document.forms[1].elements[5].value = ' ';
    document.forms[1].elements[7].value = ' ';
  } else if (document.forms[1].elements[7].checked) {
    document.forms[1].elements[5].value = ' ';
    document.forms[1].elements[6].value = ' ';
  }
}

function verifyErrors() {
  errors = 0;
  radioCheck();
  for (let i = 0; i < document.forms[1].elements.length - 2; i += 1) {
    if (document.forms[1].elements[i].value === '') {
      errors += 1;
    }
  }
}

function getInfo() {
  for (let i = 0; i < document.forms[1].elements.length - 2; i += 1) {
    if (document.forms[1].elements[i].value !== ' ') {
      info.push(document.forms[1].elements[i].value);
    }
  }
}

function showInfo() {
  document.getElementById('right').innerHTML = `Olá, ${info[0]} ${info[1]}<br>`;
  for (let i = 2; i < info.length; i += 1) {
    document.getElementById('right').innerHTML += `${info[i]}<br>`;
  }
}

document.getElementById('facebook-register').addEventListener('click', function () {
  event.preventDefault();
  verifyErrors();
  if (errors > 0) {
    document.getElementById('invalidos').style.display = 'block';
  } else {
    document.getElementById('invalidos').style.display = 'none';
    getInfo();
    document.getElementById('right').innerHTML = '';
    showInfo();
  }
});
