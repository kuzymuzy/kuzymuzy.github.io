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
    const oldpass = prompt("Старый пароль")
    if (oldpass === "1234admin1234") {
        prompt("Новый пароль: ")
        alert("Пароль изменен! Честно-честно")
    }
    else{
        alert("Старый пароль введен не верно!")
    }
}

function logout() {
    localStorage.removeItem("authtoken");
    localStorage.removeItem("remember");
    window.location.href = 'admin.html'
}

const remember = localStorage.getItem("remember");
const authtoken = localStorage.getItem("authtoken");

if (authtoken === "$P$Br6KEBLMfMNrMMMTKE7pUd9odCWA/5.") {
    if (remember === "0") {
        localStorage.removeItem("authtoken");
        localStorage.removeItem("remember");
    } else {
        console.log("Session saved!");
        localStorage.removeItem("remember");
    }
} else {
    window.location.href = 'admin.html';
}