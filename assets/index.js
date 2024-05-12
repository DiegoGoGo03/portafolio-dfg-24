const menu = document.getElementById('menu')
const btnOpen = document.getElementById('btnOpen')
const btnClose = document.getElementById('btnClose')

function openMenu() {
  menu.classList.add('show-menu')
}

function closeMenu() {
  menu.classList.remove('show-menu')
}

btnOpen.onclick = openMenu
btnClose.onclick = closeMenu