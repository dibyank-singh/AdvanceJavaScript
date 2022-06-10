console.log('Hello world')

//  Promise -- in Advance JavaScript promise is as same as we do promises in our dailylife 


//  Let suppose i promise you to pay 1000 by 10 Pm tommorw 

//  promise has tree condition 

// 1. pending --- before the promises time the promise will be in pending moad

// 2. Resolve -- If the promise is done 

// 3. Reject -- If the promise is not fullfiled , it get rejected 

// it takes executor (resolve , reject)

// ex- Task  ,, Fetch roll no and print after 2 secnd if the roll no if fethched , 
//    Task- 2 -  Get the name and age of the  student 


const promobj1=new Promise((resolve , reject)=>{

   setTimeout(()=>{
       let RollNo= [1,3,6,7,8,9]
       resolve(RollNo);
       reject('errro while communicating ');
       console.log("Yes im the boss")
   },2000);
  });

  const getbiodata=(data)=>{
      return new Promise ((resolve, reject)=>{
          setTimeout((data )=>{

              biodata= {
                  name: "divyank",
                  age : 19,
                  degree : 'BCA'
            }
            resolve(`hey My Name id ${biodata.name} I am ${biodata.age} years old , and right now i'm pursuing ${biodata.degree}
            and my roll no is ${data}`)
          },2000 , data)
      }) 
  }

//  promises consume 

promobj1.then((Roll_no)=>{
   console.log(Roll_no)
   getbiodata(Roll_no[8]).then((hmmbro)=>{
        console.log(hmmbro);
   })
}).catch((ThrowingError)=>{
  console.log(ThrowingError);
});












