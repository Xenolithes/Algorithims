

//for loop for each element within the imported array

//initialize temparray = input array slice, splice the iterable element
//reduce the array and find the product
//store that product in the return array

//return the return array

function productArray (array) {
let returnArray = [];
for (var i = 0; i < array.length; i++){
    let tempArray = array.slice()
    tempArray.splice(i,1)
    returnArray.push(tempArray.reduce((product,element) =>{
        return product *= element
    }))
}
 return returnArray
}


console.log(productArray([1,2,3,4,]))