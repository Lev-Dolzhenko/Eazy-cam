/* SHOW/HIDE PHONE MENU */

const openMenu = document.getElementById('navIcon');
const closeMenu = document.getElementById('closeMenu')
const phoneMenu = document.getElementById('phoneMenu');
const body = document.querySelector('body');

openMenu.addEventListener('click', function() {
    phoneMenu.classList.add('header__row__menu--active');
    phoneMenu.classList.remove('header__row__menu--hide');
    body.classList.add('hideYScroll');
});

closeMenu.addEventListener('click', function() {
    phoneMenu.classList.add('header__row__menu--hide'); // Добавляем класс для плавного скрытия
    phoneMenu.classList.remove('header__row__menu--active');
    body.classList.remove('hideYScroll');
});

/* SHOW/HIDE PHONE MENU */

