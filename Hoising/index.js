// Two type of hoisting in javascript 

// 1. Function hoisting 
// 2. Variable hoisting 



// Hoising simply mean calling a function before declaring 

// **** while creation phase , all function declartion and variabls moved to top of the scope in execcution context , thats why it is 
//  posible 


sum(4,8)
 function sum(a,b){
    add=a+b ;
    console.log(add)
}

// Exception 

// 1 it doesn't work in function expression 

// sum(4,8)
//  const sum=(a,b)=>{
//     add=a+b ;
//     console.log(add)
// }

// normal way 

var a=10;
console.log(a)

// Variable hoisting 

console.log(b)
var b =5;  

// Output will be undefined , because while creation phase all variabls are set to top of their scope ,
// and set their value to undefined , that's the reason we even got undefined error in function express as well 

let g=77;
g=88;
console.log(g)
g=766;