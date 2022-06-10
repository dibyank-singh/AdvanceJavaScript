// Solve this question using Binary Search Technique ... 
// Just Use devide and Conqure Technique 

//  Array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Find the index of the num 7 in the given shorted array 
// min =0 , Max=array.length-1 , elements =15
// minindex=(min+max)/2= minindex=7
// Check if minindex > elements 
// max= minindex-1 ,
// or If minindex < elements ,
// min=minindex+1 



function BinarySearch(array , num){
  
    let min=0;
    let max=array.length-1;

    while(min <= max){
        let minindex= Math.floor((min+max)/2);

        if ( array[minindex] < num){
            min=minindex+1;
            console.log("Ham Number se chhote")

        }else if (array[minindex]>num){
            max=minindex-1;
          console.log("Ham Number se bade")

        }else{
            return minindex;
            
        }
    }

return -1


}


const results =BinarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] , 7);
console.log(results)

// time complexity = Binary O(log(n))