const numObj = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
}

function sumStrings(a,b) {
    let trimZeros = /^0+/g
    a = a.replace(trimZeros, '')
    b = b.replace(trimZeros, '')
    let arrayAReversed = a.split('').reverse()
    let arrayBReversed = b.split('').reverse()
    let solutionArray = []
    let forLoopLength = arrayAReversed.length < arrayBReversed.length ? arrayBReversed.length : arrayAReversed.length;
    let addOne = 0;
    for (var i = 0; i < forLoopLength; i++){
        let valA = arrayAReversed[i] ? arrayAReversed[i] : 0
        let valB = arrayBReversed[i] ? arrayBReversed[i] : 0
        valA = numObj[valA];
        valB = numObj[valB];
        let sum = valA + valB + addOne;
        if(sum >= 10){
            addOne = 1;
            sum -= 10;
        }else{
            addOne = 0
        }
        console.log(sum)
        solutionArray.push(sum.toString())
    }
    if (addOne > 0) solutionArray.push('1')
    return solutionArray.reverse().join('')
}

module.exports = sumStrings;

