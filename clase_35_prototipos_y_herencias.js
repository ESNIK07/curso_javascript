//clases
//funciones constructoras
class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido(){
        console.log("El animal emite un sonido")
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza){
        super(nombre, tipo)
        this.raza = raza
    }
    emitirSonido(){
        console.log("El perro ladra")
    }
    correr(){
        console.log(this.nombre +" corre alegremente")
    }
}

const perro1 = new Perro("Bobby", "Perro", "Pug")
console.log(perro1)
perro1.correr()
perro1.emitirSonido()
perro1.nuevoMetodo = function(){
    console.log("Este es un metodo") //este metodo no esta en la clase solo en la instancia
}
//Para agregar un metodo al prototipo de la instancia se debe llamar a la clase de la siguiente manera
Perro.prototype.segundoMetodo = function(){
    console.log("Este es otro metodo nuevo")
}