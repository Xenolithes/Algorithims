
// Solution One
// 2 x Linear Space is still single

export class TwoNumberSum {
    constructor(){
    
    }

    firstSolution(array: number[], targetSum: number) {
        // Write your code here.
          
          for(let i = 0; i < array.length; i+=1){
              for(let y = 0; y < array.length; y+=1){
                  if(array[i] + array[y] === targetSum && y !== i){
                      return [array[i], array[y]];
                  }
              }
          }
          
        return [];
    }
}




