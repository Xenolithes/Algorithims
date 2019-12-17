function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zeros = 0
    arr.forEach( x => {
        if(x === 0){
            zeros++
        }else{
            x > 0 ? positive++ : negative++
        }
    })
    let output = [(positive / arr.length).toFixed(6), (negative / arr.length).toFixed(6), (zeros / arr.length).toFixed(6)]
    return output
    
}

console.log(plusMinus([1,1,0,-2,-2]))