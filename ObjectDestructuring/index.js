const boys={
    name:"divyank",
    age:21,
    degree:{
        UG:"Bca",
        PG:"Mca"
    }
}

// This is the normal way to get the data from object , let's think if you have big data then can you do it one by one for
// for everyone . No we have the methond of object destructuring 


// console.log(boys.name);
// console.log(boys.age);
// console.log(boys.degree);

// Object Destructuring 

const {name , age  ,degree}=boys
const{UG , PG}=degree

console.log(name)
console.log(age)
console.log(degree)
console.log(UG)
console.log(PG)