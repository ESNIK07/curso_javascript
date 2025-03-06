/* 
for in ---> onjetos
propiedades = valores
item

for (variable in objeto){
    codigo
}
*/

const listaDeCompras = {
    manzana:5,
    naranja:3,
    uva:1,
    pera:2
}
for (fruta in listaDeCompras){
    console.log(fruta)
}
for (fruta in listaDeCompras){
    console.log(`${fruta}:${listaDeCompras[fruta]}`)
}