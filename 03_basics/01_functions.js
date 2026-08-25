


// function sayMyName () {
// console.log("A")
// console.log("M")
// console.log("I")
// console.log("S")
// console.log("H")
// console.log("A")
// }


//sayMyName()


function addTwoNumbers(num1 , num2) {
    //let res = num1+num2
        return(num1+num2)

}

const result = addTwoNumbers(3,5) 
//console.log("Result:" , result)


function loginUserMessage(username="Amihsa") {
 if(username===undefined) {
    console.log("Please enter a username")
    return
 }   
    return`${username} just loged in`
}

// console.log (loginUserMessage("Amisha"))
//console.log(loginUserMessage("khushi"))    




function calculateCartPrice(val1,val2,...num1) {
    return num1;
}

//console.log(calculateCartPrice(200,400,600,2000))
   


const user = {
    username:"Amisha",
    price:199
}

function h(an) {
    console.log(`Username is ${an.username} and price is ${an.price}`)
}
  //  h(user)

  h({
    username:"sam",
    price:399
  })

  const myNewArray = [200,400,100,600]

  function returnSecondValue(getArray){
    return getArray[1]
  }

 // console.log(returnSecondValue(myNewArray))

 console.log(returnSecondValue([200,400,600,800,1000]))