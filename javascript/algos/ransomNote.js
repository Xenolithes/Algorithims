var canConstruct = function (ransomNote, magazine) {
  let magazineHash = {};
  for (let i = 0; i < magazine.length; i += 1) {
    if (!magazineHash[magazine[i]]) {
      magazineHash[magazine[i]] = 1;
    } else {
      magazineHash[magazine[i]]++;
    }
  }

  let ransomHash = {};
  for (let i = 0; i < ransomNote.length; i += 1) {
    if (ransomHash[ransomNote[i]]) {
      ransomHash[ransomNote[i]]++;
    } else {
      ransomHash[ransomNote[i]] = 1;
    }
    if (ransomHash[ransomNote[i]] > magazineHash[ransomNote[i]]) {
      return false;
    }
    if (typeof magazineHash[ransomNote[i]] === "undefined") {
      return false;
    }
  }
  return true;
};

module.exports = canConstruct;
