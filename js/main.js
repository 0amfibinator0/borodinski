document.addEventListener('DOMContentLoaded', function() {
    const loginMenu = document.querySelector('.login__btn')
    const loginFormOpen = document.querySelector('.login__btn-mobile')
    const loginFormClose = document.querySelector('.login__form-close')
    const loginBtn = document.querySelector('.login__close')
    const menu = document.querySelector('.login')
    const burgerMenuOpen = document.querySelector('.menu__btn')
    const burgerMenuClose = document.querySelector('.menu__wrap-btn')
    const burgerMenu = document.querySelector('.menu__wrap-mobile')
    
    loginMenu.addEventListener('click', () => {
        menu.classList.add('login--active')
    })
    loginBtn.addEventListener('click', () => {
        menu.classList.remove('login--active')
    })
    loginFormOpen.addEventListener('click', () => {
        menu.classList.add('login--active')
    })
    loginFormClose.addEventListener('click', () => {
        menu.classList.remove('login--active')
    })
    burgerMenuOpen.addEventListener('click', () => {
        burgerMenu.classList.add('menu__wrap-mobile--active')
    })
    burgerMenuClose.addEventListener('click', () => {
        burgerMenu.classList.remove('menu__wrap-mobile--active')
    })
})