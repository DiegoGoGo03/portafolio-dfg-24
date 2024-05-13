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



//BOTON DE IR ARRIBA
window.onscroll = function () {
  if(document.documentElement.scrollTop > 100) {
    document.querySelector('.go-top-container').classList.add('show');
  } else {
    document.querySelector('.go-top-container').classList.remove('show');

  }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo ({
    top: 0,
    behavior: 'smooth'
  });
})


