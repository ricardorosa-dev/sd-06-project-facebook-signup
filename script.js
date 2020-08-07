function loginButton() {
  alert(document.getElementById('user-email-phone').value);
}

function generateDay() {
  const select = document.getElementsByTagName('select')[0];
  for (let day = 1; day <= 31; day += 1) {
    const dayItem = document.createElement('option');
    dayItem.innerText = day;
    select.appendChild(dayItem);
  }
}

function generateYear() {
  const select = document.getElementsByTagName('select')[2];
  for (let year = 2020; year >= 1905; year -= 1) {
    const yearItem = document.createElement('option');
    yearItem.innerText = year;
    select.appendChild(yearItem);
  }
}

function generateMonth() {
  const select = document.getElementsByTagName('select')[1];
  const monthArray = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  for (let month = 0; month < monthArray.length; month += 1) {
    const monthItem = document.createElement('option');
    monthItem.innerText = monthArray[month];
    select.appendChild(monthItem);
  }
}

window.onload = function () {
  const button = document.getElementById('button-login');
  button.addEventListener('click', loginButton);
  generateDay();
  generateMonth();
  generateYear();
};
