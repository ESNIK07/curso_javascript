/* 
estructura de datos
key:value
propiedad:valor propiedad
objeto {
    propiedad1:valor1,
    propiedad2:valor2,
    propiedad3:valor3,
    Metodos
}


*/

const persona = {
    nombre:"John",
    edad:30,
    direccion: {
        calle:"Avenida Insusrgente 187",
        ciudad: "CDMX"
    },
    saludar(){
        console.log("Hola mi nombre es " + persona.nombre)
    }
}
console.log(persona)
console.log(persona.saludar())

persona.telefono = "555-555-555"
console.log(persona)
 
persona.despedir = () => { 
    console.log("Adios")
}
persona.despedir()
delete persona.telefono
delete persona.despedir
console.log(persona)
