export function getNthFib(n: number) {
    // Write your code here.
    if(n === 1){
        return 0
    }else if(n === 2 ){
        return 1
    } else if (n === 3){
        return 1
    }
    let snb: number = 1
    let onb: number = 1
    let cn: number = 1
    for(let i = 4; i <= n; i += 1){
        cn = snb + onb;
        snb = onb;
        onb = cn;
    };
    return cn;
  }