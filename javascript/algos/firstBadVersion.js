const solution = (isBadVersion) => {
  return (n) => {
    if (n === 1) return n;
    if (n === 2) return isBadVersion(1) ? 1 : 2;

    let LL = 1;
    let UL = n;

    let recurse = (LL, UL) => {
      let m = Math.floor((UL - LL) / 2) + LL;

      let upper = isBadVersion(m + 1);
      let middle = isBadVersion(m);
      let lower = isBadVersion(m - 1);

      if (!upper && !middle && !lower) {
        LL = m + 1;
      } else if (upper && middle && lower) {
        UL = m - 1;
      } else if (upper && middle && !lower) {
        return m;
      } else if (upper && !middle && !lower) {
        return m + 1;
      }

      return recurse(LL, UL);
    };

    let answer = recurse(LL, UL);
    return isBadVersion(answer) ? answer : answer + 1;
  };
};

module.exports = solution;
