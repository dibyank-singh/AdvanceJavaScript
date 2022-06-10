// Cheaking sum zero - problem 1

// ques- [-5 ,-4, -3, -2,0,2,4,6,8] - Input 


let arry=[-5 ,-4, -3, -2,0,2,4,6,8]

function findzeroopt(arry){
    let left=0;
    let right=arry.lenght-1;
    while(left < right){
        sum=arry[left]+arry[right]
        if (sum===0){
            return[arry[left],arry[right]]
        }
        else if (sum > 0){
            right--;
        }else{
            left++;
        }



    }

}

let result =findzeroopt([-5 ,-4, -3, -2,0,2,4,6,8])
console.log(result)