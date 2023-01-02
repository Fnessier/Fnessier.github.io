const icono = document.querySelector('.icono')
const menu = document.querySelector('.menu')


icono.addEventListener('click', () => {
    menu.classList.toggle('activado');
})
