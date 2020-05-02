const isHappy= (number) => {


  let output = null;
  let input = number
  let store = {}
  while(output === null){
    if(!store.hasOwnProperty(input)){
      let numberString = input.toString();
      let numberArr = numberString.split(''); //?
      let answer = numberArr.reduce( (acc, currVal) => {
        return acc + (Number.parseInt(currVal) ** 2)
      }, 0)
        if(answer === 1){
          output = true
        }else{
          store[input] = answer
          input = answer
        }
    }else{
      output = false
    }
  }
  return output
}

module.exports = isHappy