const HARDCODED_USER = 'admin';
const HARDCODED_PASS = '1234admin1234';
const HARDCODED_TOKEN = '2a615a2e-ccd9-48ab-90e6-0f631fe4e91a';

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberme').checked;
    const loginMessage = document.getElementById('login-message');

    if (username === HARDCODED_USER && password === HARDCODED_PASS) {
        loginMessage.textContent = '';
        localStorage.setItem('authtoken', HARDCODED_TOKEN);
        localStorage.setItem('remember', rememberMe ? '1' : '0');
        window.location.replace('/admin-panel.html');
    } else {
        loginMessage.textContent = 'Invalid username or password!';
        loginMessage.classList.add('text-danger');
    }
});

(function checkAlreadyLoggedIn() {
    const token = localStorage.getItem('authtoken');
    if (token === HARDCODED_TOKEN) {
        window.location.replace('/admin-panel.html');
    }
})();

function showpassword() {
    const password = document.getElementById('password');
    const buttonshow = document.getElementById('showpass');
    if (buttonshow.textContent === '🙉') {
        password.type = 'text';
        buttonshow.textContent = '🙈';
    } else {
        password.type = 'password';
        buttonshow.textContent = '🙉';
    }
}
