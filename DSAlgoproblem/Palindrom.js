// In this problem , You have to find wether this string or number is palindorm or not 

// palindrom is num , which remains same even we reversed it 

// Will solve it by 2 ways 1- Using javascript builtin function 2- Using custom JS code only 


// 1 way- Using Js functio 

// Problem hints 
// mom -> mom = true 
// dad -> dad = true 
// divyank -> knayvid = false 


function Ispalidrom(str){
    let revnum= str.split("").reverse().join("")
    return revnum.toLowerCase()===str.toLowerCase()
   
}
 console.log(  Ispalidrom("Mom"))


//  2nd Way 

function IspalindromScnd(str){

  let strval=str.toLowerCase()
  left=0;
  right=strval.length-1 ;

  while(left < right){
   
    if(strval[left]!= strval[right] ) return false;
     left++ ;
     right -- ;


  }
  return true;

}

console.log(IspalindromScnd("Dad"))