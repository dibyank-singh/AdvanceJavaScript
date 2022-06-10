// Cheaking sum zero - problem 1

// ques- [-5 ,-4, -3, -2,0,2,4,6,8] - Input 


let arry=[-5 ,-4, -3, -2,0,2,4,6,8]

function findzero (arry){
    for (let number of arry){
        console.log("outer loop ")
     for(let j=1 ; j<arry.length ; j++ ){
        console.log("inner loop ")
         if (number+arry[j]===0){
             return[number , arry[j]]
         }

     }
    }
} 

let result=findzero(arry)
console.log(result)

// this is (o)2 , quadatric time complexity 

// Make it liner complexity for more optimization 