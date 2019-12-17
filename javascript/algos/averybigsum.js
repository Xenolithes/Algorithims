function aVeryBigSum(arr) {

    let stringArr = arr.map( x => {
        return x.toString()
    })
    let total = stringArr[0].split('').reverse()
    for(var i = 1; i < stringArr.length; i++){
        let num = stringArr[i].split('').reverse()
        for( var y = 0; y < num.length; y++){
            let tempNum = Number(num[y])
            let sum = Number(total[y]) + tempNum
            if(sum > 10){
                sum -= 10
                let addOne = Number(total[y + 1]) + 1
                total[y+1] = addOne.toString()
            }
            total[y] = sum.toString()
        }
    }
return Number(total.reverse().join(''))
}

module.exports = aVeryBigSum
