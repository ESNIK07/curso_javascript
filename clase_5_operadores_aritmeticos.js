//Enteros y Decimal
const entero = 23
const decimal = 23.63
console.log(typeof entero, typeof decimal)

//Notacion Coientifica
const cientifico = 5e4

//Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

//OPERACIONES ARITMETICAS
// Suma, Resta, Multiplicacion y Division
const suma = 3 + 4
const resta = 3 - 4
const multiplicacion = 3 * 4
const division = 3 / 4 

// Modulo y Exponenciacion
const modulo = 3 % 4 //util para saber que un numero es multiplo de otro
const exponenciacion = 3**4

//Precision

const resultado = 0.1 + 0.2
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-16)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)