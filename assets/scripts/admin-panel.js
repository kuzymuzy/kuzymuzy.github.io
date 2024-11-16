const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
    }
} else {
    document.body.classList.add('dark-theme');
}

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            }
        });
    });
});

function setdev(){
    localStorage.setItem("dev", 1)
    const dev = localStorage.getItem("dev")
    alert("Параметр {dev} установлен на " + dev)
}

function erroraler() {
    alert("Произошла ошибка (соси)!")
}

function passchange() {
    fetch('/assets/db.json')
    .then(response => response.json())
    .then(data => {
        const password = data.password;
        let oldpass = prompt("Старый пароль")
        if (oldpass === password) {
            prompt("Новый пароль: ")
            alert("Пароль изменен! Честно-честно")
        }
        else {
            alert("Старый пароль введен не верно!")
        }
    }
)}

function logout() {
    localStorage.removeItem("authtoken");
    localStorage.removeItem("remember");
    window.location.replace('/admin.html')
}

const remember = localStorage.getItem("remember");
const authtoken = localStorage.getItem("authtoken");

fetch('/assets/db.json')
.then(response => response.json())
.then(data => {
    const auth_token = data.auth_token;
    if (authtoken === auth_token) {
        if (remember === "0") {
            localStorage.removeItem("authtoken");
            localStorage.removeItem("remember");
        } else {
            localStorage.removeItem("remember");
        }
    } else {
        window.location.replace('/admin.html');
    }
})

fetch('/assets/db.json')
.then(response => response.json())
.then(data => {
    setInterval(() => {
        const auth_token = data.auth_token;
        const token = localStorage.getItem("authtoken");
        if (token !== auth_token) {
            window.location.replace('/admin.html');

        }
    })
}, 100)

