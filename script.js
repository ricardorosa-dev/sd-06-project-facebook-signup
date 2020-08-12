const alertFieldLogin = () => {
  const getBtnLogin = document.querySelector('#button-login');
  const getLoginValue = document.querySelector('#user-email-phone');
  getBtnLogin.addEventListener('click', () => { alert(getLoginValue.value); });
};
alertFieldLogin();
