//Responsive BTN
const BTN = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarLogin = document.getElementsByClassName('navbar-login')[0]


BTN.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbarLogin.classList.toggle('active')
    BTN.classList.toggle('active')
})

