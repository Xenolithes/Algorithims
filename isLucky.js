
function isLuckyNumber(n) {
    let numString = n + "";
    console.log(numString)
    let numArray = numString.split('')
    let lucky = true;
       numArray.forEach(number => {
           if(number !== "4" && number !== "7"){
               lucky = false;
               return lucky
           }
       })
    return lucky;
   }


   console.log(isLuckyNumber(480))
