let errors = 0;

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
  for (let i = 0; i < document.forms[1].elements.length - 1; i += 1) {
    if (document.forms[1].elements[i].value === '') {
      errors += 1;
    }
  }
}

document.getElementById('facebook-register').addEventListener('click', function () {
  event.preventDefault();
  verifyErrors();
  if (errors > 0) {
    document.getElementById('invalidos').style.display = 'block';
  } else {
    document.getElementById('invalidos').style.display = 'none';
  }
});
