const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;


themeIcon.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
});
