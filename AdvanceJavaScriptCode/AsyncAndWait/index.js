//   Async keyword should be used before the fuction to return the funt as promise 
//   await is used to hold the data untill the problem been resolved 

// ********* Async/await will only only used in promises  

//  Async/await is only used for consume the promises 

// ex- Task  ,, Fetch roll no and print after 2 secnd if the roll no if fethched , 
//    Task- 2 -  Get the name and age of the  student 


const promobj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let RollNo = [1, 3, 6, 7, 8, 9]
        resolve(RollNo);
        reject('errro while communicating ');
        console.log("Yes im the boss")
    }, 2000);
});

const getbiodata = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout((data) => {

            biodata = {
                name: "divyank",
                age: 19,
                degree: 'BCA'
            }
            resolve(`hey My Name id ${biodata.name} I am ${biodata.age} years old , and right now i'm pursuing ${biodata.degree}
             and my roll no is ${data}`)
        }, 2000, data)
    })
}

//  promises consume 

//  promobj1.then((Roll_no)=>{
//     console.log(Roll_no)
//     getbiodata(Roll_no[8]).then((hmmbro)=>{
//          console.log(hmmbro);
//     })
//  }).catch((ThrowingError)=>{
//    console.log(ThrowingError);
//  });

async function getdata() {
    const rollnodata = await promobj1
    console.log(rollnodata);
    const biodatas = await getbiodata(rollnodata[3])
    // console.log(biodatas);
    return biodatas
}
    const gta= getdata().then((random)=>{
       console.log(random)
    }).catch((ohk)=>{
       console.log(ohk)
    })
    // console.log(gta)

// getdata();