// You have shorted Array given , and you have to find all unique no from that array ... 
// Array=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]

// To Do 

// 1. Asume i=0; j=1;
// 2. Match both indexs , if both matches that it will match with next one , finally count total unique no 


function getUniqueNum(array){
 
    if(array.length){
        let i=0;
        for(let j =1 ; j<array.length ; j++){
            if (array[i]!==array[j]){
                i++ ; 
                array[i]=array[j];
            }
            
        }
        return i+1
        
    }else {
        throw new Error ("Uuuffff , This array is empty buddy")
    }
}
const result=getUniqueNum([1,1,2,2,3,3,4,4,4,4,4,5,5,6,6,7,7,8,8,9,9,9,9,9,9,9,9,9]);
console.log(result)