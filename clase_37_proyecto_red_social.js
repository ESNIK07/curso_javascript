const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ]
  
const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
]

// const username = prompt("ingrese el nombre de usuario")
// const password = prompt("ingrese la contrasenia del usuario"+usuario)
const username = "mariana"
const password = "789"

function reviewPasswd(username, password){
    for(let i = 0; i < usersDatabase.length; i++){
        if (username === usersDatabase[i].username && password === usersDatabase[i].password){
            return true
            // break
        }
    }return false
}
function signIn(username, password){
    if (reviewPasswd(username, password)){
        console.log("Bienvenido a tu cuenta " + username)
        console.log(usersTimeline)
    }else{
        console.log("Opps, Usuario o contrasenia incorrectos")
    }
}
signIn(username, password)