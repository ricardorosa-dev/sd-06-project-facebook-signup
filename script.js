document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));

let data = document.querySelectorAll('input');

for (let i = 2; i < data.length; i += 1) {
  console.log(data[i].value)
}