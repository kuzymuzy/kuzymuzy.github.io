const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
    }
} else {
    document.body.classList.add('dark-theme');
}