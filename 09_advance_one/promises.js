//fetch('https://something.com').then().catch().finally()

//Promise 1
/*const promiseOne = new Promise(function(resolve,reject) {
    //Do an asyn task
    //DB calls , cryptography, network 
    setTimeout(function() {
        console.log("Async task is completed") 
        resolve()
    },1000)
}) 



promiseOne.then(function(){
    console.log("Promise consumed")
}) */


//Promise 2
/*new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)


    
}).then(function(){
    console.log("Async resolved two")
})*/


//Promise 3
/*const promiseThree = new Promise(function(resolve,reject) {
setTimeout(function(){
      resolve({user:"Amisha",email:"amisha@example.com"})
    },1000)

})


promiseThree.then(function(user){
    console.log(user)
})*/

//Promise 4
/*const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:'Amisha',password:"123"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})




//const username = promiseFour.then((user)=> {
    promiseFour
    .then((user)=> {
    console.log(user)
    return user.username
})
.then((username) => {
console.log(username)
})
.catch(function(error) {
 console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


//console.log(username)*/


//Promise 5
/*const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){

    let error = true
    if(!error) {
        resolve({username:"javascript" , password:"123"})
    }
    else {
        reject('ERROR: JS went wrong')
    }
},1000)
})

async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response)
    } catch(error) {
        console.log(error)
    }
}


consumePromiseFive()*/

//Promise 6

/*async function getAllUsers(){
    try{
         const response = await fetch('https://jsonplaceholder.typicode.com/users')

         const data = await response.json()
         console.log(data);
     } 
     catch(error) {
console.log("E : " , error)
     }
    }
     

     getAllUsers()*/

     //Promise 7
     /*fetch('https://api.github.com/users/hiteshchoudhary')
     .then((response)=> {
        return response.json()
     })
     .then((data) => {
        console.log(data)
     })
     .catch((error) => { 
    console.log(error)
    })*/