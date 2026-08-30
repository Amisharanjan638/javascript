const userEmail = []

if(userEmail) {
    //console.log("Got user Email")
}
else {
  //  console.log("Don't have user email")
}


// if(userEmail.length ===0) {
//     console.log("Array is empty")
// }


const emptyObj = {} 

if(Object.keys(emptyObj).length ===0) {
//    console.log("Object is empty")
}


//Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10

//val1 = null?? 10 

//let var1 = undefined ?? 15

//console.log(var1)
 
val1 = null ?? null ?? 20

//console.log(val1)


//Ternary OPerator

//condition ? expression1 : expression2

const icePack = 100
// icePack<=80 ? console.log("less than 80") : console.log("greater than 80")

