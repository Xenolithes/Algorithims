
export class Sort {
  constructor() {

  }

  binarySearch(array: number[], target: number): number {

    let UU: number = array.length
    let LL: number = 0
    let M: number = (UU - LL) % 2 === 0 ? (UU - LL) / 2 : Math.floor((UU - LL) / 2) + 1;
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
      if (LL === NM && UU === LL + 1) {
        return -1
      } else {
        return search()
      }
    }
    return search();
  }

}  