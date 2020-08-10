const invalidMsg = document.createElement('div');
invalidMsg.innerHTML = 'Campos inválidos';
invalidMsg.className = 'invalidfield';

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function deleteInvalidMsg() {
  if (document.querySelector('.invalidfield')) {
    document.querySelector('.invalidfield').remove();
  }
}

document.getElementById('facebook-register').addEventListener('click', function () {
  deleteInvalidMsg();
  const password = document.querySelector('.new-password').value.length;
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
  if (password === 0) {
    document.querySelector('.sign-in-form').append(invalidMsg);
  }
});
