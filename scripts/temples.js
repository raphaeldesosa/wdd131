let currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

let lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified

document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
})
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        hamburger.textContent = '❌';
    } else {
        hamburger.textContent = '☰';
    }
});
