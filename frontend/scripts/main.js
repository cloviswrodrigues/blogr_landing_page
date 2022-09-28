const menuItem = document.querySelectorAll('.js-dropdown');

function showSubMenu(e) {
    hiddenAllSubMenu();

    let dropDown = e.target;
    let subMenu = e.target.nextElementSibling;
    dropDown.classList.add('dropdown-active');
    subMenu.classList.add('activate', 'js-submenu-activate');
}

function hiddenAllSubMenu(){
    menuItem.forEach((elem) => {
        let dropDown = elem;
        let subMenu = elem.nextElementSibling;
        dropDown.classList.remove('dropdown-active')
        subMenu.classList.remove('activate','js-submenu-activate');
    })
}

menuItem.forEach((e) => {
    e.addEventListener('click', showSubMenu)
})

window.addEventListener('mouseup', (e) => {
    var submenuActivate = document.querySelector('.js-submenu-activate');
    if (e.target != submenuActivate) {
        hiddenAllSubMenu();
    }
})


const btnMenuMobile = document.querySelector('.js-btn-mobile');
const btnHamburguer = document.querySelector('.js-btn-hamburguer');
const btnClose = document.querySelector('.js-btn-close');
const menuMobile = document.querySelector('.header__bg-menu');

function openMenuMobile() {
    btnHamburguer.classList.toggle('activate')
    btnClose.classList.toggle('activate')
    menuMobile.classList.toggle('activate')
}

btnMenuMobile.addEventListener('click', openMenuMobile)

