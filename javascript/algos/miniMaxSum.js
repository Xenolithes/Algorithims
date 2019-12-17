function miniMaxSum(arr) {
    let sortedNumArr = arr.sort((a,b)=> a - b)
    console.log(sortedNumArr.slice(0, sortedNumArr.length-1).reduce((x, y)=> {
        return y += x
    })+' '+sortedNumArr.slice(1).reduce((x, y) => {
        return y += x
    }))
}


module.exports = miniMaxSum