function birthdayCakeCandles(ar) {
    let sortedCandles = ar.sort((a, b) => a-b)
    let tallestCandle = sortedCandles.pop()
    let output = 1
    let foundAllTallestCandles = false
    while(foundAllTallestCandles !== true){
        let tempCandle = sortedCandles.pop()
        if(tempCandle === tallestCandle){
            output++
        }else{
            foundAllTallestCandles = true
        }
    }
    return output
}

module.exports = birthdayCakeCandles