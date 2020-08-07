const buttonEnter = document.getElementById('button-login');
buttonEnter.addEventListener('click', ()=>{
    alert (inputEmailOrPhone.value);
});
const inputEmailOrPhone = document.getElementById('user-email-phone');
const generateForm = document.getElementById('form');
generateForm.addEventListener ('submit', function(e){
    if (name.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (lastname.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (email-phone.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (password.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (birth.value === '');
        return alert('Campos inválidos');
});
/*
generateForm.addEventListener ('submit', function(e){
    if (male.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (female.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
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
});//add
const buttonEnter = document.getElementById('button-login');
buttonEnter.addEventListener('click', ()=>{
    alert (inputEmailOrPhone.value);
});
const inputEmailOrPhone = document.getElementById('user-email-phone');
const generateForm = document.getElementById('form');
generateForm.addEventListener ('submit', function(e){
    if (name.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (lastname.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (email-phone.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (password.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (birth.value === '');
        return alert('Campos inválidos');
});
/*
generateForm.addEventListener ('submit', function(e){
    if (male.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
    if (female.value === '');
        return alert('Campos inválidos');
});
generateForm.addEventListener ('submit', function(e){
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