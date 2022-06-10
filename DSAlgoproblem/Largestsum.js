// array = [2,3,5,4,3,6,3,7,8,5]
// find larget sum of consecutive number ..?



function largestsum(array , num){

 if (num>array.length ){
     throw new Error("Num can't be bigger than array ")
 } else{

    let max=0;
    for(i=0; i<array.length-num+1 ; i++){

        let temp=0;
        for(j=0; j<num ; j++){

            temp+=array[i+j]

            if(temp>max){
                max=temp
            }

        }
        
    }
    return max;
 }

}

const result =largestsum([2,3,5,4,3,6,3,7,8,5], 3)
console.log(result)