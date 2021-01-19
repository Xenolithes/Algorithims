type Triplet = [number, number, number];

export class numberArrayMethods {
  constructor() { }


  smallestDifference(arrayOne: number[], arrayTwo: number[]) {

    let totalDifference: number = Infinity;
    let one: number = 0
    let two: number = 0

    for (let i = 0; i < arrayOne.length; i += 1) {
      for (let y = 0; y < arrayTwo.length; y += 1) {
        if (arrayOne[i] >= arrayTwo[y]) {
          if (Math.abs(arrayOne[i] - arrayTwo[y]) < totalDifference) {
            totalDifference = Math.abs(arrayOne[i] - arrayTwo[y])
            one = arrayOne[i]
            two = arrayTwo[y]
          }
        } else {
          if (Math.abs(arrayTwo[y] - arrayOne[i]) < totalDifference) {
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
    for (let a = 0; a < array.length; a += 1) {
      for (let b = a + 1; b < array.length; b += 1) {
        for (let c = 0; c < a; c += 1) {
          if (array[a] + array[b] + array[c] === targetSum) {
            const answer: Triplet = [array[a], array[b], array[c]]
            answer.sort((a, b) => a - b)
            output.push(answer)
          }
        }
      }
    }
    output.sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0]
      } else if (a[1] !== b[1]) {
        return a[1] - b[1]
      } else if (a[2] !== b[2]) {
        return a[2] - b[2]
      }
      return a[0] - a[1]
    })
    return output;
  }

  moveElementToEnd(array: number[], toMove: number) {
    // Write your code here.
    function sortTargetToEnd(a: number, b: number): number {
      if (a === toMove) {
        return 1
      }
      return -1
    }
    array.sort(sortTargetToEnd)
    return array;
  }


  isMonotonic(array: number[]) {
    let posNeg: 1 | 2 | 3;
    let first: number = 0;
    let second: number = 0;
    let last: number = 0
    for (let i = 0; i < array.length; i += 1) {
      if (i === 0) {
        first = array[i]
        last = array[i]
      } else if (i === 1 || posNeg === 3) {
        second = array[i];
        last = array[i]
        //Decreasing
        if (first > second) {
          posNeg = 1;
          //Increasing
        } else if (second > first) {
          posNeg = 2
        } else if (second === first) {
          posNeg = 3
        }
      } else if (posNeg === 1 || posNeg === 2) {
        if (posNeg === 1) {
          if (array[i] > last) {
            return false
          } else {
            last = array[i]
          }
        } else if (posNeg === 2) {
          if (array[i] < last) {
            return false
          } else {
            last = array[i]
          }
        }
      }
    }
    return true;
  }

  spiralTraverse(array: number[][]): number[] {
    // Write your code here.

    const output = []
    const numElements = array.length * array[0].length;
    let tr = 0;
    let br = array.length - 1;
    let lr = 0
    let rr = array[0].length - 1
    let index = 0;
    let right = false
    let left = true
    while (output.length !== numElements) {
      if (index === tr && left) {
        for (let ti = lr; ti <= rr; ti += 1) {
          output.push(array[tr][ti])
        }
        index += 1
        tr += 1
        if (br === tr) {
          right = false
        } else {
          right = true
        }
        left = false
      } else if (index === br && !right && !left) {
        for (let bi = rr; bi >= 0 + lr; bi -= 1) {
          output.push(array[br][bi])
        }
        index -= 1
        br -= 1
        right = false
        left = true
      } else if (index !== tr || index !== br) {
        if (right) {
          for (index; index <= br; index += 1) {
            output.push(array[index][rr])
          }
          index -= 1
          rr -= 1
          right = false;
        } else if (left) {
          for (index; index >= tr; index -= 1) {
            output.push(array[index][lr])
          }
          index += 1
          lr += 1
        }
      }

    }
    return output;
  }

  //Incomplete
  longestPeak(array: number[]) {
    if (array.length === 0) {
      return 0
    }
    // Write your code here.
    let longestLength: number = 0;
    let length: number = 1;
    let last: number = array[0];
    let peak: boolean = false;
    let incrDecr: boolean = true
    for (let i = 1; i < array.length; i += 1) {
      let current = array[i]

      if (incrDecr && current >= last) {
        peak = true;
        length += 1;
      } else if (!incrDecr && current < last) {
        length += 1;
      } else if (incrDecr && current < last && peak) {
        incrDecr = false
        length += 1
      } else if (current === last) {
        incrDecr = true
        if (longestLength < length && peak) {
          longestLength = length
        }
        length = 2
      } else if (!incrDecr && current > last && peak) {
        incrDecr = true
        if (longestLength < length) {
          longestLength = length
        }
        length = 2;
      }
      last = current
    }
    return longestLength > length ? longestLength : length;
  }

  arrayOfProducts(array: number[]): number[] {
    const output = []
    const hash = {}
    for (let i = 0; i < array.length; i += 1) {
      let total = 1;
      for (let y = 0; y < array.length; y += 1) {
        if (y !== i) {
          total *= array[y]
        }
      }
      output.push(total);
    }
    return output;
  }

  firstDuplicateValue(array: number[]): number {
    const values = new Map();
    for (let i = 0; i < array.length; i += 1) {
      if (values.has(array[i])) {
        return array[i]
      } else {
        values.set(array[i], array[i]);
      }
    }
    return -1;
  }

}

