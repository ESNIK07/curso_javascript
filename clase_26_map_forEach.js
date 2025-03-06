// map
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)
console.log(numbers)
console.log(squaredNumbers)
// forEach

const colors = ['red', 'pink', ' blue']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteratedColors)

//Ejemplo Aplicado 
//Formula 
// C = 5/9 * (F - 32)
const temperatureFahrenheit = [32, 68, 95, 104, 212]
const temperatureCelsius = temperatureFahrenheit.map(fahreinheit => 5/9 * (fahreinheit - 32))
console.log(temperatureFahrenheit)
console.log(temperatureCelsius)

//Suma de los elementos de elementos de un array
const newNumbers = [1, 2, 3, 4, 5]
let sum = 0
newNumbers.map(number => {
    sum += number
}) 
console.log(newNumbers)
console.log(sum)