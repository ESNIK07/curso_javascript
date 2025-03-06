function suma (a, b){
    return a + b
}
// console.log(suma(3,5))

function descuento(precio,descuento){
    descuento = precio * (descuento/100)
    return precio - descuento  
}
console.log(descuento(100000,30))