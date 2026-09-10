//let myName = "Amisha     "
//let myChannel = "chai     "

//console.log(myName.trim().length)

let myHeros = ["thor", "spidermam"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Amisha  = function(){
    console.log(`Amisha is present in all objects`)
}

Array.prototype.Khushi = function() {
    console.log(`Amisha says hello`)
}


//heroPower.Amisha() 
//myHeros.Amisha()
//myHeros.Khushi()
//heroPower.Khushi()


//Inheritance

const User = {
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
   makeAssignment: "JS assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

//Old syntax
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

// True length

let anotherUsername = "ChaiAurCode"
String.prototype.trueLength = function(){
    console.log(`${this}`)
   // console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"Amisha".trueLength()
"iceTea".trueLength()