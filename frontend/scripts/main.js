const menuItem = document.querySelectorAll('.js-dropdown');

console.log('menu:', menuItem);

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
    console.log('e ====>',e.target)
    if (e.target != submenuActivate) {
        hiddenAllSubMenu();
    }
})