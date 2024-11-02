document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('random-form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const min = parseInt(document.getElementById('min').value);
        const max = parseInt(document.getElementById('max').value);

        if (min >= max) {
            result.textContent = "Минимальное значение должно быть меньше максимального.";
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent = `Случайное число: ${randomNumber}`;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            themeToggle.checked = true;
            themeIcon.textContent = '🌕';
        } else {
            themeIcon.textContent = '🌑';
        }
    } else {
        themeToggle.checked = true;
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '🌕';
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            themeIcon.textContent = '🌕';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            themeIcon.textContent = '🌑';
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
