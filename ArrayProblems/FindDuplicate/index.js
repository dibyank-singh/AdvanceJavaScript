//Q- Filterout unique elements from javascript array .

var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango","dk",'dk']

          function removeitems(array) {
            return array.filter((ele,index)=>
                array.indexOf(ele)=== index
            )
            
        }
        console.log( removeitems(arr))

    // Using Set Method
    // Set method allows to store unique value only 
    
    function uniquedata(element){
       return [...new Set(element)]
    }
   console.log( uniquedata(arr))
