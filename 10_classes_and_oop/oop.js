//Object literal
const user = {
    username:"Amisha",
    loginCount : 8,
    signedIn :true,

    getUserDetails : function() {
        //console.log("Got user details from database")
       // console.log(`Username: ${this.username}`)
      // console.log(this)
    }
}

//console.log(user.username)
//console.log(user.getUserDetails()) O/P got... undefined
   // user.getUserDetails()
  //  console.log(this)

  //Constructor function


 // const promiseOne = new Promise()
  //const date = new Date()

function User(username , loginCount , isLoggedIn) {
     this.username = username
     this.loginCount = loginCount
     this.isLoggedIn = isLoggedIn


     this .greeting = function() {
        console.log(`Welcome  ${this.username}`)
     }

     return this
}


const userOne = new User("Amisha" ,12 , true)
const userTwo = new User("Chai aur code" ,8 ,true)
  console.log(userOne.constructor)
  console.log(userOne instanceof User)
  //console.log(userTwo) 