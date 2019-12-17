function randomNumGenerator (min, max){
    let minRan = Math.floor(Math.random() * min)
    let maxRan = Math.floor(Math.random() * max)
    return maxRan + minRan
}

module.exports = randomNumGenerator