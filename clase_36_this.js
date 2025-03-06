/* this se usa en clases
   hace referencia a la misma clase */

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}
const persona1 = new Persona("Alice", 25)
console.log(persona1.nombre)
console.log(persona1.edad)