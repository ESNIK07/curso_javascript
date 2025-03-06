//Adivina  el numero secreto
const numeroSecreto = Math.floor(Math.random() * 10 + 1)
// console.log(numeroSecreto)
const numeroJugador = parseInt(prompt("Adivina el numero"))
console.log(`Este es el numero con el que juegas ${numeroJugador}`)
if (numeroJugador === numeroSecreto){
    console.log("Felicidades Adivinaste el numero secreto")
} else if (numeroJugador < numeroSecreto){
    console.log("Tu numero es menor que el secreto, intenta de nuevo")
} else {
    console.log("Tu numero es mayor que el secreto, intenta de nuevo")
}