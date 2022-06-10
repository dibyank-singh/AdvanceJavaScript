// Set ??
// A JavaScript Set is a collection of unique values. 
// Each value can only occur once in a Set. A Set can hold any value of any data type.
 let myarr=[3,4,5,6,7,];
 let myname="Dibyank";
//  let myset= new Set(myname)
 let myset= new Set(myarr)
  myset.add(8)
  myset.delete(4)

 console.log(myset)
 console.log(myset.size)
 console.log(myset.has(3))

//  using forEach properties 
 myset.forEach((data)=>{
  console.log(data)
 })

 for( num of myset){
     console.log(num)
 }
