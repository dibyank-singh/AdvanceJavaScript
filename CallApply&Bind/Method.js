// Use of Call 
// Use of Apply 
// Use of Bind 

// Let's create the problem so we can see how call Apply and bind can be use .

let Empdata={
    name:"divyank",
    age:"22",
    biodata:function(){
        console.log(this)
    }

}
Empdata.biodata()
// Let suppose we have to use biodata fun again in other object eg-empldata2
// So rather wring same thing again again , we can use call , to rafer same for other object too

// 1. Use of Call 

let Empdata2={
    name:"Ravi",
    age:"24",
    biodata:function(){
        console.log(this)
    }

}
Empdata.biodata.call(Empdata2);

// What if the function is outside of the object, Here we have the solution 

// let biodata=function(){
//     console.log(this)
// }
// biodata.call(Empdata2);

//2. Use of Apply

// Main diff btw Call and apply - Apply can pass the agrument as array list 

let biodata=function(state,country){
    console.log(this.name+" "+state+" "+country)
}
biodata.call(Empdata2,['gurgaon','india']);

// 3. Use of Bind
// The bind() method allows an object to borrow a method 
// from another object without copying.

let biofun=Empdata.biodata.bind(Empdata2);
biofun()