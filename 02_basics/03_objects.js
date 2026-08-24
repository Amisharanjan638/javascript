// singleton 

//Object iterals

const mySym = Symbol("key1")


const JsUser = {
name:"Amisha",
"full_name": "Amisha Ranjan",
[mySym] : "mykey1",
age:22,
location:'deoghar',
email:"amisha@gmail.com",
isLoggedIn:false,
lastLoggedinDays:["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full_name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "amisha@123.com"
//Object.freeze(JsUser)

JsUser.email = "amisha11@gmail.com"
// console.log(JsUser)
 

 