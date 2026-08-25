const tinderUser = new Object()
 
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn = false


//console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
    userfullname:{
firstname:"Amisha",
lastname:"Ranjan"
    }
}
}


//console.log(regularUser.fullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = { obj1,  obj2}
//const obj3=Object.assign({},obj1 , obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)


 const users = [
    {
        id:1,
        email:"a@gmail.com"
    }
 ]



// console.log(users[0].id)


//  console.log(tinderUser)
//  console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

//  console.log(tinderUser.hasOwnProperty("isLoggedIn"))





const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Amisha"
}

//course.courseInstructor

const{price:p} = course
// console.log(p)




// {
//     "name":"Khushi",
//     "coursena""js in hindi",
//     "rice""Free"
// }

