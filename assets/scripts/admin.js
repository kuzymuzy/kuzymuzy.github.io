document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberme').checked;
    const loginMessage = document.getElementById('login-message');


    fetch('/assets/db.json')
        .then(response => response.json())
        .then(data => {
            const StoredUser = data.user;
            const storedPassword = data.password;
            if (storedPassword == password && StoredUser === username){
                loginMessage.textContent = '';
                localStorage.setItem('authtoken', '$P$Br6KEBLMfMNrMMMTKE7pUd9odCWA/5.');
                if (rememberMe) {
                    localStorage.setItem("remember", "1");
                } else {
                    localStorage.setItem("remember", "0");
                }
                window.location.href = '/admin-panel.html';
            }
            else {
                loginMessage.textContent = 'Invalid username or password!';
                loginMessage.classList.add('text-danger');
            }
        })
    }
);

    const token = localStorage.getItem("authtoken");
    if (token === "$P$Br6KEBLMfMNrMMMTKE7pUd9odCWA/5.") {
        window.location.href = 'admin-panel.html'
    }
    else {
        console.log("")
    }