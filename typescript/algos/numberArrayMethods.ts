type Triplet = [number, number, number];

export class numberArrayMethods{
  constructor(){}


  smallestDifference(arrayOne: number[], arrayTwo: number[]) {

    let totalDifference: number = Infinity;
    let one: number = 0
    let two: number = 0

    for(let i = 0; i < arrayOne.length; i += 1){
      for(let y = 0; y < arrayTwo.length; y += 1){
        if(arrayOne[i] >= arrayTwo[y]){
          if(Math.abs(arrayOne[i] - arrayTwo[y]) < totalDifference){
            totalDifference = Math.abs(arrayOne[i] - arrayTwo[y])
            one = arrayOne[i]
            two = arrayTwo[y]
          }
        }else{
          if(Math.abs(arrayTwo[y] - arrayOne[i]) < totalDifference){
            totalDifference = Math.abs(arrayTwo[y] - arrayOne[i])
            one = arrayOne[i]
            two = arrayTwo[y]
          }
        }

      }
    }
    return [one, two];
  }

  threeNumberSum(array: number[], targetSum: number): Triplet[] {
    const output = []
      for(let a = 0; a < array.length; a+=1){
          for(let b = a + 1; b < array.length; b+=1){
              for(let c = 0; c < a; c += 1){
                  if(array[a] + array[b] + array[c] === targetSum){
                      const answer: Triplet = [array[a], array[b], array[c]]
                      answer.sort((a, b) => a - b )
                      output.push(answer)
                  }
              }
          }
      }
      output.sort((a, b) => {
      if(a[0] !== b[0]){
        return a[0] - b[0]
      }else if(a[1] !== b[1]){
        return a[1] - b[1]
      }else if(a[2] !== b[2]){
        return a[2] - b[2]
      }
      return a[0] - a[1]
    })
    return output;
  }

  moveElementToEnd(array: number[], toMove: number) {
    // Write your code here.
    function sortTargetToEnd(a: number , b: number): number{
      if(a === toMove){
        return 1
      }
      return -1
    }
    array.sort(sortTargetToEnd)
    return array;
  }


  isMonotonic(array: number[]) {
    // Write your code here.
    return false;
  }
  
}

