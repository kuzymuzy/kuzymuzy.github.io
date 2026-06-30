/* ================================================
   scripts.js — Кузя Музя site functionality
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /* ---------- Elements ---------- */
    const navToggle   = document.querySelector('.nav-toggle');
    const navMenu     = document.querySelector('.nav-menu');
    const navLinks    = document.querySelectorAll('.nav-link');
    const themeIcon   = document.getElementById('theme-icon');
    const themeToggle = document.getElementById('theme-toggle');
    const sections    = document.querySelectorAll('.fade-in');

    /* ===== 1. Mobile nav toggle ===== */
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            this.classList.toggle('open');
            navMenu.classList.toggle('open');
            document.body.classList.toggle('lock-scroll');
        });
    }

    /* ===== 2. Close nav on link click (mobile) ===== */
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('open')) {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
                document.body.classList.remove('lock-scroll');
            }
        });
    });

    /* ===== 3. Smooth scroll to section ===== */
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var target = document.getElementById(targetId);
            if (target) {
                var offset = 72; /* nav height + padding */
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ===== 4. Intersection Observer for fade-in ===== */
    if ('IntersectionObserver' in window && sections.length) {
        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        /* fallback: show all immediately */
        sections.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    /* ===== 5. Theme toggle ===== */
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme' || !savedTheme) {
        /* default to dark */
        document.body.classList.add('dark-theme');
        if (themeToggle) themeToggle.checked = true;
        if (themeIcon) themeIcon.textContent = '🌕';
    } else {
        document.body.classList.add('light-theme');
        if (themeToggle) themeToggle.checked = false;
        if (themeIcon) themeIcon.textContent = '🌑';
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', function () {
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
    }

    /* ===== 6. Developer section visibility ===== */
    function updateDevVisibility() {
        var devVal = localStorage.getItem('dev');
        var visible = devVal === '1';
        var devSection = document.getElementById('dev');
        var devNav     = document.getElementById('devnav');
        if (devSection) devSection.style.display = visible ? 'block' : 'none';
        if (devNav)     devNav.style.display     = visible ? 'block' : 'none';
    }

    /* Check immediately and also poll (the original used setInterval) */
    updateDevVisibility();
    setInterval(updateDevVisibility, 1000);

    /* ===== 7. Dev mode from URL param ===== */
    var urlParams = new URLSearchParams(window.location.search);
    var urldev = urlParams.get('dev');

    if (urldev === '1') {
        localStorage.setItem('dev', '1');
    } else if (urldev === '0') {
        localStorage.removeItem('dev');
    }
    /* If ?dev is absent, do nothing — don't wipe localStorage */
});

/* ===== Standalone functions (called from HTML onclick) ===== */

function authtoken() {
    localStorage.setItem('authtoken', '$P$Br6KEBLMfMNrMMMTKE7pUd9odCWA/5.');
    window.location.href = '/admin-panel.html';
}

function localclear() {
    localStorage.clear();
    console.log('localStorage clean was success');
}
