// closure is an action that the innerfunction can get access to the outer function (parents funt) variabls and parameters
// As well aa global variable 

// const outerfun=(a)=>{
//     let b=4;
//     const interfuun=()=>{
//         sum=b+a;
//         console.log(`the sum of this two no is ${sum}`)
//     }
//     interfuun()
// }
// outerfun(6)


// One more example with return the function rather than calling it ....  

let d=7;
const outerfun=(a)=>{
    let b=4;
    const interfuun=()=>{
        sum=b+a+d;
        console.log(`the sum of this two no is ${sum}`)
    }
     return   interfuun
}

  const intval=  outerfun(6)
   intval();