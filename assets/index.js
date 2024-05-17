/*______________________NAV BAR_______________________*/
const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
const links = nav.querySelectorAll('.menu__link');

// Asumiendo que tu navbar tiene una altura fija, por ejemplo 80px
const navbarHeight = 80;

nav.addEventListener('click', function(event) {
  if (event.target.closest('#btnOpen')) {
    menu.classList.add('show-menu');
  }

  if (event.target.closest('#btnClose')) {
    menu.classList.remove('show-menu');
  }

  if (event.target.matches('.menu__link')) {
    menu.classList.remove('show-menu');

    for (const link of links) {
      link.classList.remove('active');
    }

    event.target.classList.add('active');

    // Desplazar la página suavemente hasta la sección correspondiente
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }

    event.preventDefault();
  }
});


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
  strings: ['Frontend Developer', 'Web Developer', 'Designer', 'Prompt Engineer', 'Fullstack Developer'],
  typeSpeed: 90,
  backSpeed: 70,
  startDelay: 25,
  loop: true,
  loopCount: Infinity,
  cursorChar: '|',
})


/*______________________SCROLL REVEAL_______________________*/
const sr = new ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1800,
  reset: true
})

sr.reveal('.hero__content-img', { origin: 'right', distance: '100px' })
sr.reveal('.hero__content-body', { origin: 'left', distance: '100px' })
sr.reveal('.about p', { origin: 'bottom', distance: '100px', duration: 2000 })
sr.reveal('.about p+p', { origin: 'bottom', distance: '100px', duration: 3000 })
sr.reveal('.skills__content', { origin: 'top', distance: '100px' })




/*____________________BOTONES INTERACTIVOS______________________*/
window.onscroll = function () {
  /*____________________BOTON DE IR ARRIBA______________________*/
  if(document.documentElement.scrollTop > 100) {
    document.querySelector('.go-top-container').classList.add('show');
  } else {
    document.querySelector('.go-top-container').classList.remove('show');

  }
  /*____________________BOTON DE WHATSAPP______________________*/
  if(document.documentElement.scrollTop > 100) {
    document.querySelector('.go-to-wa-container').classList.add('show-wa');
  } else {
    document.querySelector('.go-to-wa-container').classList.remove('show-wa');

  }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo ({
    top: 0,
    behavior: 'smooth'
  });
})


/*____________________FONDO MATRIX______________________*/
const canvas = document.getElementById("canva-matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = document.querySelector('.matrix-container').clientWidth;
    canvas.height = document.querySelector('.matrix-container').clientHeight;
}

window.addEventListener('resize', () => {
    resizeCanvas();
    initializeMatrix();
});
resizeCanvas();

let cols;
let ypos;

function initializeMatrix() {
    cols = Math.floor(canvas.width / 20) + 1;
    ypos = Array(cols).fill(0);
}

function matrix() {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = "15pt monospace";

    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });
}

setInterval(matrix, 100);
initializeMatrix();
