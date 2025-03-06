//no modifican arrays pero ayudan a buscar elementos e index de elemento
//find()
const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(num => num > 10 && num < 20)
console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

//findIndex

const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumbers.findIndex(num => num > 50)

console.log(randomNumbers)
console.log(indexNumber)