document.addEventListener('DOMContentLoaded', function () {
    const systemLang = navigator.language || navigator.languages[0];
    
    if (systemLang.startsWith('uk')) {
        window.location.href = "/ua";
    }
  
});

fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        if (data.country_code === 'UA') { 
            window.location.href = "/ua"; 
        }
})