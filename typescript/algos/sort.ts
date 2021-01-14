
export class Sort {
  constructor() {

  }


  // bubblesort, swapping values until a array is sorted
  bubbleSortHelper( array: number[], index: number): void {

  }
  bubbleSort(array: number[]): number[] {
    // // Write your code here.
    // let eval: number = 0 
    // for(let i: number = 0; i < array.length; i+=1){
    
    // }
    return []
  }
  

  binarySearch(array: number[], target: number): number {

    let UU: number = array.length
    let LL: number = 0
    let NM: number = 0

    function search(): number {
      if ((UU - LL) % 2 === 0) {
        NM = (UU - LL) / 2 + LL
      } else {
        NM = Math.floor((UU - LL) / 2) + LL
      }
      if (array[NM] === target) {
        return NM
      }
      if (array[NM] > target) {
        UU = NM
      } else {
        LL = NM
      }
      if ((LL === NM && UU === LL + 1) || (UU === LL)) {
        return -1
      } else {
        return search()
      }
    }
    return search();
  }

}  