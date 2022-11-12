
console.log("hello")

 const  getdata=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((Response)=> Response.json()).then((data)=>
    console.log(data))
    

}
getdata()