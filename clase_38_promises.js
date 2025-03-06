/*
Promise
Estados:
pending
fullfilled
rejected

callbacks:
resolve
reject

then() cuando la promesa se resuelve se llama
catch() cuando no se reseulve obtenemos el error de aca
*/
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
    let operationSuccessful = true
    if (operationSuccessful){
        resolve("La operacion fue exitosa")
    }else{
        reject("Fallo la operacion")
    }
    }, 2000)
})

promise
    .then((sucessMessage) => {
        console.log(sucessMessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })