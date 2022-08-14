const MenuButton = document.getElementById('hamburger-menu');
const SideMenu = document.getElementById('side-menu');

MenuButton.addEventListener('click',() => {
    SideMenu.classList.toggle('show');
})