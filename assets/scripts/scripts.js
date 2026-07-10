document.addEventListener('DOMContentLoaded', function () {
  /* ── Smooth scroll for nav links ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = this.getAttribute('href').substring(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
    });
  });

  /* ── Fade-in on scroll ──────────────────────────────────── */
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Developer section (preserved) ──────────────────────── */
  function developer() {
    var dev = document.getElementById('dev');
    var devnav = document.getElementById('devnav');
    if (localStorage.getItem('dev') === null) {
      if (dev) dev.style.display = 'none';
      if (devnav) devnav.style.display = 'none';
    } else {
      var d = Number(localStorage.getItem('dev'));
      if (dev) dev.style.display = d === 1 ? 'block' : 'none';
      if (devnav) devnav.style.display = d === 1 ? 'block' : 'none';
    }
  }
  setInterval(developer, 1000);

  /* ── Auth utils (preserved) ─────────────────────────────── */
  window.authtoken = function () {
    localStorage.setItem('authtoken', '$P$Br6KEBLMfMNrMMMTKE7pUd9odCWA/5.');
    window.location.href = '/admin-panel.html';
  };
  window.localclear = function () {
    localStorage.clear();
    console.log('localStorage clean was success');
  };
});

/* ── URL dev param (preserved) ───────────────────────────── */
(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.get('dev') === '1') {
    localStorage.setItem('dev', '1');
  } else if (!localStorage.getItem('dev')) {
    localStorage.clear();
  }
})();
