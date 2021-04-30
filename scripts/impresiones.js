import bodega from './inventario.js'
let prueba = bodega


document.querySelector('#min1').addEventListener('click',agrandarMiniatura)
document.querySelector('#min2').addEventListener('click',agrandarMiniatura)
document.querySelector('#min3').addEventListener('click',agrandarMiniatura)


function agrandarMiniatura(){
    document.querySelector('#bigPhoto').src = this.getAttribute('src')
}

document.querySelectorAll('#moreClothes')[0].addEventListener('click',cambiarCatalogo)
document.querySelectorAll('#moreClothes')[1].addEventListener('click',cambiarCatalogo)
document.querySelectorAll('#moreClothes')[2].addEventListener('click',cambiarCatalogo)

function cambiarCatalogo(){
    let seleccion = this.getAttribute('index')
    console.log (bodega)
    document.querySelector('#min1').src = bodega[seleccion].imagenNo1
    document.querySelector('#min2').src = bodega[seleccion].imagenNo2
    document.querySelector('#min3').src = bodega[seleccion].imagenNo3
    document.querySelector('#bigPhoto').src = bodega[seleccion].imagenNo1
    window.scrollTo(0, 0)
}


