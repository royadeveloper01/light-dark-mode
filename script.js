const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 60%)'
    toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon');
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 / 80%)';
    toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
}
// Switch Theme Dynamically
function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener 
toggleSwitch.addEventListener('change', switchTheme);

// Get the current theme from Local Storage
const currentTheme = localStorage.getItem('theme');

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}