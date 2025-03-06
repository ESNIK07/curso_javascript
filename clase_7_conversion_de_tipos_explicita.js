// Explicit Type Casting
const string = '42'
const integer = parseInt(string)
console.log(integer, typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float, typeof float)

const stringBynary = '1000'
const bynary = parseInt(stringBynary,2)
console.log(bynary, typeof bynary)

// Explicit Type Implicit
const sum = '5' + 3
console.log(sum)//53

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log(numberValue + numberValue)
console.log(numberValue + stringValue)
console.log(numberValue + booleanValue)
console.log(booleanValue + booleanValue)
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
