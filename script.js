const menu = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav-links');
const open = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
    if(nav.classList.contains('open')) {
        nav.classList.remove('open');
        overlay.classList.remove('active')
        close.classList.remove('active');
        open.classList.add('active');
    } else {
        nav.classList.add('open');
        overlay.classList.add('active')
        open.classList.remove('active');
        close.classList.add('active');
    }
})