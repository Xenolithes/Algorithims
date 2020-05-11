/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  if(trust.length === 0) return 1
  const townPopulation = {};
  const townTrust = {};
  for (let i = 0; i < trust.length; i++) {
    if (!townPopulation.hasOwnProperty(trust[i][0])) {
      townPopulation[trust[i][0]] = i;
    }
    if (!townTrust.hasOwnProperty(trust[i][1])) {
      townTrust[trust[i][1]] = 1;
    } else {
      townTrust[trust[i][1]] += 1;
    }
  }
  for (let key in townTrust) {
    if (townTrust[key] === N - 1) {
      if (townPopulation.hasOwnProperty(key)) { 
        return -1;
      } else {
        return parseInt(key);
      }
    }
  }
  return -1;
};

module.exports = findJudge;
