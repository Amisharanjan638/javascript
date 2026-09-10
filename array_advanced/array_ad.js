const myArr=[]
//%DebugPrint(myArr)

//continuos(Packed), Holey


// SMI (small integer)
// Packed element
//Double (float,string,function)


const arr2 = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS

arr2.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arr2.push('7')
//PACKED_ELEMENTS


arr2[10] = 11
// HOLEY_ELEMENTS 

console.log(arr2)
console.log(arr2.length)
console.log(arr2[19])

// bound check
// arr2.hasOwnProperty(9)
// Araay.prototype.hasOwnProperty(9)
// Object.prototype.hasOwnProperty(10)

//holes are very expensive in js 


const arr3 = [1,2,3,4,5]
//console.log(arr3[8]); (only bound check)

//console.log(arr3[2])

// SMI > DOUBLE > PACKED (Continuous)
// H_SMI > H_DOUBLE > H_PACKED (Holey)


const arr4 = new Array(3)

// just 3 holes. HOLEY_SMI_ELEMENTS

arr4[0] = '1' //HOLEY_ELEMENTS
arr4[1] = '2' //HOLEY_ELEMENTS
arr4[2] = '3' //HOLEY_ELEMENTS


const arr5 =[]

// NO HOLES . PACKED_SMI_ELEMENTS

arr5.push('1') //PACKED_ELEMENTS
arr5.push('2') //PACKED_ELEMENTS
arr5.push('3') //PACKED_ELEMENTS


const arr6 = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS

arr6.push(NaN) //PACKED_DOUBLE_ELEMENT
arr6.push(Infinity) //PACKED_DOUBLE_ELEMENT

//for , for-of , forEach