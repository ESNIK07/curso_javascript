//filter()
//crean un nuevo array a partir de una condicion
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(num => num % 2 === 0)  
console.log(numbers)
console.log(evenNumbers)

//reduce()
//Ejecuta una funcion sobre cada elemento devolviendo un unico valor
//caso 1
const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(numbersReduce)
console.log(sum)
//caso 2
const words = ['apple', 'banana', 'hello', 'bay', 'bay', 'bay', 'apple']
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue] ++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
},{})

console.log(wordFrecuency)