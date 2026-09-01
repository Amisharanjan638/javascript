// for of

//["", "", ""]
// [{} , {} , {}]




const arr =[1,2,3,4,5]

for (const val  of arr) { 
 //   console.log(val)
}

const greetings = "Hello world"

for (const greet of greetings) {
//    console.log(`Each char is ${greet}`)
    
}


//Maps

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA', "United States of America")
map.set('Fr' , "France")
map.set('IN' , "INDIA")
//console.log(map)

for (const [key,value] of map) {
    //console.log(key , ':-', value)
    
}


const myObject = {
    'game1' : 'NFS',
    game2 : 'Spiderman'
}

// keys in object 

for (const key of Object.keys (myObject)) {
 //   console.log(key)
    
}


//values in object

for (const val of Object.values(myObject)) {
 //   console.log(val)
    
}


// key-value pair in object 
for (const entry of Object.entries(myObject)) {
 //   console.log(entry)
    
}




