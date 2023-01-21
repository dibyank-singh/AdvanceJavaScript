// Quest-1 

// In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();

// output 
// 1
// 4
// 3
// 2

// Quest-2

// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.


function checkpalindrom(str){

    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));

}
checkpalindrom("aba")


// Quest-3 

// function sum(a){
//    return add(b)(
//     a+b
//    )
// }
// sum()

// What will be the output when the following code is executed? Explain.
console.log(false == '0')
console.log(false === '0')

// Ques-4
// What is the output out of the following code? Explain your answer.

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);


// Ques- Uppercase a string

function sayLouder(text){ 
const data= text.toUpperCase();
return data;
}

// sample usage (do not modify)
console.log(sayLouder("It works"));



// Ques- Based on array.filter method

function findgrade(arry){

    const data= arry.filter((elem)=> elem>10)
    return data;

}

console.log(findgrade([4,7,10,12,14,16,3,5,9]))

// Ques- Array of object filter..
function getPassingTests(results) {
    const grademarks=10;
    return results.filter(elem=> elem.grade >= grademarks)
     
}

// sample usage (do not modify)
const data = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data))

// Ques- Complete the getReactVersion method such that it returns the current installed version of React.
import React from "react"

function getReactVersion() {
return React.version
}

// sample usage (do not modify)
console.log(getReactVersion());

// Q 
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

// Ques

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

// Output, true, false, false.

// Ques
function getAge(...args) {
    console.log(typeof args);
  }
  
  getAge(21);

//   output object

// Ques
let greeting;
greetign = {}; // Typo!
console.log(greetign);

// Output {}

// Ques
function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 });
//   Output Hmm.. You don't have an age I guess

// Ques
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);       
// output  true true false true

// ques
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);


