// function fetchData(){
//     fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }
// fetchData()

// async function fetchData(){
//     try{
//         let response = await fetch("https://rickandmortyapi.com/api/location")
//         let data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Errorr "+error)
//     }
// }
// fetchData()

const urls = ["https://rickandmortyapi.com/api/character",
              "https://rickandmortyapi.com/api/location"]

async function fetchNewData(){
    try{
        for await (let url of urls){
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
        }
    } catch(error){
        console.log(error)
    }
}
fetchNewData(urls)