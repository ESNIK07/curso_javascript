const greeting = (name) => {
    return "Hi, " + name
}

//Arrow funtion - implicit return
const greetingImplicit = (name) => "Hi, " + name 

//Lexical Binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageTraditionalFunction:function(message){
        console.log(this.name + "says:" + message)
    },
    messageWithArrowFunction:(message)=> {
        console.log(this.name + "says:" + message)
    }
}
fictionalCharacter.messageTraditionalFunction("With great power comes great responsability.")
fictionalCharacter.messageWithArrowFunction('Beware of Doc Octopus')