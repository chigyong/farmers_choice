//Responsive BTN
const BTN = document.getElementsByClassName('menu')[0]
const navbar = document.getElementsByClassName('navbar-links')[0]

BTN.addEventListener('click', () => {
    navbar.classList.toggle('active')
})