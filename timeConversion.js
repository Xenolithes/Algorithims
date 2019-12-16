function timeConversion(s) {
    let findPM = /PM$/
    let find12 = /^12/
    let testPM = findPM.test(s)
    let test12 = find12.test(s.slice(0,2))
    let output = ""
    if(testPM && !test12){
        let increase = (Number(s.slice(0,2)) + 12).toString()
        output = increase + s.slice(2,8) 
    }else if(!testPM && test12){
        output = "00" + s.slice(2,8)
    }else{
        return s.slice(0,8)
    }
    return output
}

module.exports = timeConversion