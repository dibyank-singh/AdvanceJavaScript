// We have three indexes methods of array , 
// 1- Indexof , 2- findindexof , 3- find

// 1- Find -return the first instance that matches the specified criteria. Does not progress to find any other matching instances.

let arr=[2,3,7,8,4,6,1]

const result=arr.find(ele => ele>7)

console.log(result)

// 2 findindexof-  it returns the index of the first matching element. 

let arr2=[3,5,6,3,6,8,]
const result2=arr2.findIndex(ele => ele==8)
console.log(result2)

// 3- indexof -  Works almost identically to findIndex, but instead of taking a function as an argument it takes a simple value

let arr3=[4,5,6,3,6,7,3]
const result3= arr3.indexOf(6)
console.log(result3)