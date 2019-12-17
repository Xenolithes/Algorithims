// add indexes

var sum_pairs=function(ints, s){

    let index = {
        a : [0, 0],
        b : [0, ints.length]
    }

    let answer = false

       for(var i = 0; i < ints.length; i++){
         for(var y = i + 1; y < ints.length; y++){
             if(ints[i] + ints[y] === s && index.b[1] > y){
               index.a[0] = ints[i];
               index.a[1] = i
               index.b[0] = ints[y];
               index.b[1] = y
               answer = true
           }
           
           if(answer && i >= index.b[1]){
             return [index.a[0], index.b[0]]
           }
         }
       }
       
       if(answer){
           return [index.a[0], index.b[0]]
       }
      return undefined; 
    }