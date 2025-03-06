// para hacer escalalble el objeto

function Persona(nombre, apellido, edad,){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

const persona1 = new Persona("Juan", "Agudelo", 24)
console.log(persona1)
const persona2 = new Persona("Daniel", "Rodriguez", 23)
console.log(persona2)
Persona.prototype.telefono = "555-555-5555"

persona1.nacionalidad = "Colombiano"
console.log(persona1)

Persona.prototype.saludar = function() {
    console.log("Hola mi nombre es", this.nombre, this.apellido)
}
persona1.saludar()
persona2.saludar()