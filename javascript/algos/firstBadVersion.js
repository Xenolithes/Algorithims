
const solution = (isBadVersion) => {
  return (n) => {
    if (n === 1) return n;
    if (n === 2) return isBadVersion(1) ? 1 : 2;

    let LL = 1;
    let UL = n;
    let trigger = false;
    console.log(isBadVersion(Math.floor(UL / 2)));
    
    let recurse = (LL, UL) => {
      if (LL + 1 === UL) {
        return LL;
      }
      if (!isBadVersion(Math.floor(UL /2) + LL)) {
        LL = Math.floor(UL / 2) + LL; 
      } else {
        UL = Math.floor((UL-LL) / 2) + LL;
      }
      return recurse(LL, UL)
    }

    
    let answer = recurse(LL, UL)
    console.log(answer)
    return isBadVersion(answer) ? answer : answer + 1
  };
    
  }



module.exports = solution
