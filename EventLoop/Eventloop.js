console.log("helloooo")


// const Greetfirst=(name)=>{
 
//     console.log(`${name} I Love You..`)
// setTimeout(()=>{
//   console.log("good everning 2")
// })
// console.log("Good evening3")
// var data=name

// return Lastgreet(data)

// }

// const Lastgreet=()=>{
//     console.log(`${name} i love you too`)
// }
// Greetfirst("Divyank")

// for (var i = 0; i < 3; i++) {
//     setTimeout(function(){  
//         console.log(i)            
//     }, 1000 + i);
    
//   }

//   To maintain its reference to the variable i without the value of it being altered
// for (var i = 0; i < 3; i++) {
//     setTimeout(function(i_local) { 
//       return function()
//        { console.log(i_local); } 
//     }(i), 1000 + i);
//   }

//   Use of Closure

// const createbase=(basenum)=>{
   
//     return function data(num){

//         return basenum+num
//     }
// }

//  const finalnum=  createbase(6)
//  console.log(finalnum(10))
//  console.log(finalnum(12))

function counter() {
    var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
      retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
  }
  
  // error if we try to access the private variable like below
  // _counter;
  
  // usage of our counter function
  var c = counter();
  c.add(5); 
  c.add(10); 
  
  // now we can access the private variable in the following way
  console.log(c.retrieve())

  
  // => The counter is currently at: 14