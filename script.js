const invalidMsg = document.createElement('div');
invalidMsg.innerHTML = 'Campos inválidos';

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

document.getElementById('facebook-register').addEventListener('click', function () {
  const inputs = document.querySelectorAll('input');
  for (let i = 2; i < inputs.length; i += 1) {
    if (inputs[i].value === null) {
      document.querySelector('.sign-in-form').append(invalidMsg);
    }
  }
  if (document.getElementById('male').checked || document.getElementById('female').checked ||
        document.getElementById('custom').checked) {
    // Não fazer nada.
  } else {
    document.querySelector('.sign-in-form').append(invalidMsg);
  }
});
