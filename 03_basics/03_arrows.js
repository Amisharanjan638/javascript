const user = {
    username:"Amisha",
    price:999,
    welcomeMessage:function() {
    //    console.log(`${this.username} , welcome to website`)
  //   console.log(this)   
    }


}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage() 

//console.log(this)

/*function chai() {
    let username="khushi"
    console.log(this)
}

chai()


const chai = function() {
    let username = "Amisha"
    console.log(this.username)
}

chai()*/


const chai =()=> {
    let username = "Amisha"
    console.log(this)
}

//chai()


//const addTwo =(num1 , num2) =>  num1+num2


//const addTwo =(num1,num2) => (num1+num2)
//console.log(addTwo(5,5))

const addTwo=(num1,num2) => ({username:"Amisha"})


console.log(addTwo(3,4)) 


//const myArray = [2,3,4,5,6]

//myArray.forEach(()=> {} )





