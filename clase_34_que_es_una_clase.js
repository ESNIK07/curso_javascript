class Person{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log("hola mi nombre es", this.nombre, "tengo", this.edad, "anios")
    }
}
const persona1 = new Person("Juan", 24)
persona1.saludar()