const link1 = () =>{
    location.href = "index.html";
}

const link3 = () =>{
    location.href = "/portfolio";
}

const nav = document.querySelector('nav');
const buttons = document.querySelector('.navbar_buttons');
const logo = document.querySelector('.logo');
const value = 200

const changeNav = () => {
    nav.classList.toggle('shrink', window.scrollY > value)
}

const changeButtons = () => {
    buttons.classList.toggle('navbar_buttons2', window.scrollY > value)
}

const hideLogo = () => {
    logo.classList.toggle('logo2', window.scrollY > value)
}

window.addEventListener('scroll', changeNav)
window.addEventListener('scroll', changeButtons)
window.addEventListener('scroll', hideLogo)