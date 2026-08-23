// primitive 

// 7 types : String ,Number , Boolean ,Null , Undefined , Bigint , Symbol

 const score = 100
 const scoreValue = 100.3
 const isLoggedIn = false

 const outsideTemp = null
 let userEmail;

const id  = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 333333333333n

//Reference type or Non - primitive 

//Arrays , Objects , Functions



const heros = ['shaktiman' , "naagraj" , "doga" ]
let myObj ={
    name: "Amisha",
    age:2
}

const myfunction = function() {
    console.log("hello world")
}

// console.log(heros)
// console.log(myObj)
// myfunction()
// console.log(typeof heros)
//  console.log(typeof myfunction) 

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) , Heap(Non-Primitive)

let myYoutubename = "amisharanjancom"

let anothername = myYoutubename

anothername = "chaiaurcode"
// console.log(myYoutubename)
// console.log(anothername)


let userOne =  {
    email: "user@google.com",
    upi: "userybl"
}

let userTwo = userOne

userTwo.email = "amisha@google.com"
console.log(userOne.email)
console.log(userTwo.email)