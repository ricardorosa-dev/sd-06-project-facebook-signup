const buttonEnter = document.getElementById('button-login');
const inputEmailOrPhone = document.getElementById('user-email-phone');
const nameValue = document.getElementById('name');
const lastnameValue = document.getElementById('lastname'); 
const emailphoneValue = document.getElementById('email-phone');
const passwordValue = document.getElementById('password');
const birthValue = document.getElementById('birth');
const maleValue = document.getElementById('male');

buttonEnter.addEventListener('click', () => {
    alert(inputEmailOrPhone.value);
})
const generateForm = document.getElementById('form');
generateForm.addEventListener ('submit', function() {
  if (nameValue.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (lastnameValue.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (emailphoneValue.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (passwordValue.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (birthValue.value === '');
    return alert('Campos inválidos');
});
/*
generateForm.addEventListener ('submit', function(){
  if (maleValue.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (female.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (other.value === '');
    return alert('Campos inválidos');
});
*/

const getGender = document.getElementById('other');
getGender.addEventListener ('click', function(){
  const addField = document.createElement('input');
    if (getGender != ''){
      addField.name = 'gender-custom';
      addField.placeholder = 'Gênero (opcional)';
      addField.style.boder = "1px solid black";
      getGender.appendChild(addField);
    }
});
generateForm.addEventListener('submit', function(){
    if (getGender != '' && name.value != '' && lastname.value != '' && email-phone.value != '' && password.value != '' && birth.value != ''){
        return alert('Olá' + name.value + lastname.value + email-phone.value + birth.value + male.value + female.value + other.value);
    }
});
const buttonEnter = document.getElementById('button-login');
buttonEnter.addEventListener('click', () => {
  alert (inputEmailOrPhone.value);
});
const inputEmailOrPhone = document.getElementById('user-email-phone');
const generateForm = document.getElementById('form');
generateForm.addEventListener ('submit', function(){
  if (name.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (lastname.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (email-phone.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (password.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (birth.value === '');
    return alert('Campos inválidos');
});
/*
generateForm.addEventListener ('submit', function(){
  if (male.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (female.value === '');
    return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(){
  if (other.value === '');
    return alert('Campos inválidos');
});
*/
const getGender = document.getElementById('other');
getGender.addEventListener ('click', function(e){
  const addField = document.createElement('input');
    if (getGender != ''){
      addField.name = 'gender-custom';
      addField.placeholder = 'Gênero (opcional)';
      addField.style.boder = "1px solid black";
      getGender.appendChild(addField);
    }
});
generateForm.addEventListener('submit', function(e){
  if (getGender != '' && name.value != '' && lastname.value != '' && email-phone.value != '' && password.value != '' && birth.value != ''){
    return alert('Olá' + name.value + lastname.value + email-phone.value + birth.value + male.value + female.value + other.value);
  }
});
