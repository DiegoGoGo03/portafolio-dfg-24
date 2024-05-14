/*______________________NAV BAR_______________________*/
const menu = document.getElementById('menu')
const nav = document.querySelector('.nav')
const links = nav.querySelectorAll('.menu__link')


nav.addEventListener('click', function (event) {
  if (event.target.closest('#btnOpen')) {
    menu.classList.add('show-menu')
  }

  if (event.target.closest('#btnClose')) {
    menu.classList.remove('show-menu')
  }

  if (event.target.matches('.menu__link')) {
    menu.classList.remove('show-menu')

    for (const link of links) {
      link.classList.remove('active')
    }

    event.target.classList.add('active')
  }
})


/*________________________DARK MODE_________________________*/
const body = document.body
const ls = window.localStorage
const btnTheme = document.getElementById('btnTheme')

const theme = ls.getItem('darkMode')
const sun = 'bx bxs-sun'
const moon = 'bx bxs-moon'

if (theme) {
  body.classList.add('dark')
  btnTheme.firstElementChild.className = sun
} else {
  body.classList.remove('dark')
  btnTheme.firstElementChild.className = moon
}

btnTheme.addEventListener('click', function () {
  body.classList.toggle('dark')
  if (body.classList.contains('dark')) {
    // entonces guardo en el localStorage el valor de dark
    ls.setItem('darkMode', true)
    btnTheme.firstElementChild.className = sun
  } else {
    // entonces voy a eliminar del localStorage el valor de dark
    ls.removeItem('darkMode')
    btnTheme.firstElementChild.className = moon
  }

})


/*___________________________TYPING__________________________*/
var typed = new Typed('#typing', {
  strings: ['Frontend Developer', 'Web Developer', 'Designer', 'Fullstack Developer'],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 25,
  loop: true,
  loopCount: Infinity,
  cursorChar: '_',
})


/*______________________SCROLL REVEAL_______________________*/
const sr = new ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.hero__content-img', { origin: 'right', distance: '100px' })
sr.reveal('.hero__content-body', { origin: 'left', distance: '100px' })
sr.reveal('.about p', { origin: 'bottom', distance: '100px', duration: 2000 })
sr.reveal('.about p+p', { origin: 'bottom', distance: '100px', duration: 3000 })
sr.reveal('.skills__content', { origin: 'top', distance: '100px' })




/*____________________BOTON DE IR ARRIBA______________________*/
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


