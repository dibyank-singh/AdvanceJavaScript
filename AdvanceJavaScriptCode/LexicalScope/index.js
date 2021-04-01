// The inner function lexically get access to the outer function 
// (A childreen function can get access to the parents function )

// scope chain in javascript are lexically define , which mean we can see the scope of the variable by looking on the code  

let grees ="hello folks"

let ram =()=>{
    gress2="How are you "
    
    let syama=()=>{
        gress3="I hope you guys are good"
        console.log(grees+gress2+gress3)
    }
    syama()
} 
ram()

//  Every function can get access to either to their parents function or from the global execution context  