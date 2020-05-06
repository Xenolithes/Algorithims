var firstUniqChar = function (s) {
  let charHash = {};
  let lastUniq = -1;
  for (let i = 0; i < s.length; i += 1) {
    if (!charHash.hasOwnProperty(s[i])) {
      charHash[s[i]] = {
        index: i,
        number: 1,
      };
    } else if (charHash.hasOwnProperty(s[i])) {
      charHash[s[i]].number += 1;
    }
  }

  if (s.length === Object.keys(charHash).length) {
    return -1;
  }

  for (let key in charHash) {
    if (charHash[key].number === 1) {
      return charHash[key].index;
    }
  }

  return -1
};

module.exports = firstUniqChar;
