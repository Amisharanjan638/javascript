const marvel_heros = ["thor", "IronMan" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const new_marvel_heros=marvel_heros.concat(dc_heros)
// console.log(new_marvel_heros) 

const new_marvel_heros = [...marvel_heros, ...dc_heros]
// console.log(new_marvel_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)




// console.log(Array.isArray("Amisha"))
// console.log(Array.from("Amisha"))
// console.log(Array.from({name:"Amisha"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))


const arr1 = [1,2,3,4,5,6]

// console.log(arr1.at(0))

// console.log(arr1.fill(3))

const new1 = arr1.filter((num) => num>3)
// console.log(new1)

const new2 =arr1.find((num)=> num > 3 )
// console.log(new2)


const arr2 = ["Amisha" , "Ranjan" , "Khushi"]
// console.log(arr2.join())

const new3 = arr1.map(num => num*2 )
// console.log(new3)