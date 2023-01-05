const botonMenu = document.getElementById('00')
const menuDesplegable = document.getElementById('01')
const barras = document.querySelectorAll('.menu-boton span')


botonMenu.addEventListener('click',()=>{
    menuDesplegable.classList.toggle('flex');
    barras.forEach(child => child.classList.toggle('cross'))
})