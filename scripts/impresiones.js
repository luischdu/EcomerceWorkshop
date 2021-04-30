import bodega from './inventario.js'
document.querySelector('#min1').addEventListener('click',agrandarMiniatura)
document.querySelector('#min2').addEventListener('click',agrandarMiniatura)
document.querySelector('#min3').addEventListener('click',agrandarMiniatura)
document.querySelector('#precioPrenda').innerHTML = '$' + bodega[0].tallaM
document.querySelector('#precioInter').innerHTML = '$ '+bodega[0].tallaM
document.querySelector('#precioInter').innerHTML = '$ '+bodega[0].tallaM
document.querySelector('#precioInter').innerHTML = '$ '+bodega[1].tallaM
document.querySelector('#precio2').innerHTML = '$ '+bodega[2].tallaM
document.querySelector('#precio3').innerHTML = '$ '+bodega[3].tallaM
function agrandarMiniatura(){
    document.querySelector('#bigPhoto').src = this.getAttribute('src')
}

document.querySelectorAll('#moreClothes')[0].addEventListener('click',cambiarCatalogo)
document.querySelectorAll('#moreClothes')[1].addEventListener('click',cambiarCatalogo)
document.querySelectorAll('#moreClothes')[2].addEventListener('click',cambiarCatalogo)

function cambiarCatalogo(){

    let seleccion = this.getAttribute('index')
    
    if (seleccion==1){
        if(document.querySelectorAll('#moreClothes')[0].src== bodega[1].imagenNo2 ){
            document.querySelectorAll('#moreClothes')[0].src = bodega[0].imagenNo1
            document.querySelector('#textoInter').innerHTML = bodega[0].nombre
            document.querySelector('#precioInter').innerHTML = '$ '+bodega[0].tallaM
            console.log(textoInter.innerHTML)
            // console.log(bodega[0].)
        }else{
            document.querySelectorAll('#moreClothes')[0].src =bodega[1].imagenNo2
            document.querySelector('#textoInter').innerHTML = bodega[1].nombre
            document.querySelector('#precioInter').innerHTML = '$ '+bodega[1].tallaM
            seleccion = 0
            }
    }    
    document.querySelector('#min1').src = bodega[seleccion].imagenNo1
    document.querySelector('#min2').src = bodega[seleccion].imagenNo2
    document.querySelector('#min3').src = bodega[seleccion].imagenNo3
    document.querySelector('#bigPhoto').src = bodega[seleccion].imagenNo1
    document.querySelector('#nombrePrenda').innerHTML = bodega[seleccion].nombre
    document.querySelector('#precioPrenda').innerHTML = '$' + bodega[seleccion].tallaM
    window.scrollTo(0, 0)
}


