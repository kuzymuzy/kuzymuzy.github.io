const HARDCODED_PASS = '1234admin1234';
const HARDCODED_TOKEN = '2a615a2e-ccd9-48ab-90e6-0f631fe4e91a';

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
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

function setdev() {
    localStorage.setItem('dev', 1);
    alert('Параметр {dev} установлен на 1');
}

function erroraler() {
    alert('Произошла ошибка (соси)!');
}

function passchange() {
    let oldpass = prompt('Старый пароль');
    if (oldpass === HARDCODED_PASS) {
        prompt('Новый пароль: ');
        alert('Пароль изменен! Честно-честно');
    } else {
        alert('Старый пароль введен не верно!');
    }
}

function logout() {
    localStorage.removeItem('authtoken');
    localStorage.removeItem('remember');
    window.location.replace('/admin.html');
}

const remember = localStorage.getItem('remember');
const authtoken = localStorage.getItem('authtoken');

if (authtoken === HARDCODED_TOKEN) {
    if (remember === '0') {
        localStorage.removeItem('authtoken');
        localStorage.removeItem('remember');
    } else {
        localStorage.removeItem('remember');
    }
} else {
    window.location.replace('/admin.html');
}
