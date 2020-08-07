function handleLoginButton() {
  const loginBtn = document.getElementById('button-login');

  loginBtn.onclick = () => {
    alert('Email ou telefone');
  };
}

window.onload = () => {
  handleLoginButton();
};
