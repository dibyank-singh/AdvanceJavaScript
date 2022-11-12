// const addtion=()=>{
//     addtion=x=y=5
// }
// addtion()
// console.log(x)

// const dividefun=function(x,y,callbackInput){

//     var quotient = x/y;
//     var remainder = x%y;
//     callback([quotient , remainder]);

//     return function final(total){
//         console.log("quotient and remainder is" + total);

//     }

// }
// dividefun(6,5, final)

// const dividefun=function (x, y, callbackinput)
//             {
//                 var quotient = x/y;
//                 var remainder = x%y;
//                 callbackinput([quotient , remainder]);
//             }
  
//             function Final(value) 
//             {
               
//                 console.log(`the output is ${value} quotient and remainder `);
//                 let x = Math.floor((Math.random() * 10) - 1);
//                 console.log(x)
//             }
 
//             dividefun(6, 5, Final); 
            

//      var totalover= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]  
//       const checkresult=function(over){
       
//         for(let x=0; x<over.length; x++){
//             var count =0;
//             for(var y=0; y< Math.floor((Math.random()*6)-1); y++){
//                 count++;
//             }
//             if(count==-1){
//                 console.log("It's no ball")
//             }
//             else if(count==0){
//                 console.log("It's Wicket")
//             }
//             else if(!count==0&&-1){
//                 console.log("It's run")
//             }
//             console.log(count)
//         }

//       }
//       checkresult(totalover)




// const Name=["Divyank", "Sakshi", "Gopal", "Ram"]

//  Name.map(function(ele){
//  console.log(ele)
//  })

//  Output Divyank Sakshi Gopal Ram


// Synchronus Callback Function 


// const Name=["Divyank", "Sakshi", "Gopal", "Ram"]

// const greetings= (name)=>{
//   console.log(`Hello ${name} Good Evening,Hope you've enjoyed this content`)
// }
// const mainfun=(data, greetrequest)=>{
//     data.map(ele=> greetrequest(ele));
//     console.log("This console should print at last... ")
// }
// mainfun(Name, greetings)
// Hello Divyank Good Evening,Hope you've enjoyed this content
// Hello Sakshi Good Evening,Hope you've enjoyed this content
// Hello Gopal Good Evening,Hope you've enjoyed this content
// Hello Ram Good Evening,Hope you've enjoyed this content
// This console should print at last...

// Asynchronous Callback Function.

console.log("Async callback function execution 1")

setTimeout(() => {
    console.log("Async callback function execution 2")
}, 3000);
console.log("Async callback function execution 3")
// Output
// Async callback function execution 1
// Async callback function execution 3
// Async callback function execution 2