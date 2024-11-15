document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberme').checked;
    const loginMessage = document.getElementById('login-message');
    


fetch('/assets/db.json')
    .then(response => response.json())
    .then(data => {
        const auth_token = data.auth_token;
        const StoredUser = data.user;
        const storedPassword = data.password;
        if (storedPassword == password && StoredUser === username){
            loginMessage.textContent = '';
            localStorage.setItem('authtoken', auth_token);
            if (rememberMe) {
                localStorage.setItem("remember", "1");
            } else {
                localStorage.setItem("remember", "0");
            }
            window.location.replace('/admin-panel.html');
        }
        else {
            loginMessage.textContent = 'Invalid username or password!';
            loginMessage.classList.add('text-danger');
        }
    })
});

setInterval(() =>{
    fetch('/assets/db.json')
    .then(response => response.json())
    .then(data => {
        const auth_token = data.auth_token;
        const token = localStorage.getItem("authtoken");
        if (token === auth_token) {
            window.location.replace('/admin-panel.html');
        }
    })
}, 1)

function showpassword() {
    const password = document.getElementById('password');
    const buttonshow = document.getElementById("showpass");
    if (buttonshow.textContent === "🙉"){
        password.type = "text"
        buttonshow.textContent = "🙈"
    }
    else {
        password.type = "password"
        buttonshow.textContent = "🙉"
    }
    
}



