document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('#navbar-menu'),
        navToggle = document.querySelector('#navbar-toggle'),
        navClose = document.querySelector('#navbar-close'),
        allNavItems = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show-menu')));
})