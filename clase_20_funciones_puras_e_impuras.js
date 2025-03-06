// Funciones Puras
// Side Effects (Efectos Secundarios)
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

//Funcion Pura
function sum(a, b){
    return a + b
}
//Funcion Impura
function sum(a, b){
    console.log("A: ", a)
    console.log("B: ", b)
    return a + b
}