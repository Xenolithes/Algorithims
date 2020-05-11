/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sro, sco, newColor) {
  let callHash = {};
  let initialColor = image[sro][sco];
  if (initialColor === newColor) {
    return image;
  }
  let rowLength = image.length;
  let columnLength = image[0].length;
  let floodFillLevel = (sr, sc) => {
    image[sr][sc] = newColor;
    //LEFT
    if (sc - 1 !== -1) {
      if (
        image[sr][sc - 1] === initialColor &&
        !callHash.hasOwnProperty(`${sr}${sc - 1}`)
      ) {
        callHash[`${sr}${sc - 1}`] = true;
        floodFillLevel(sr, sc - 1);
      }
    }
    //RIGHT
    if (sc + 1 !== columnLength) {
      if (
        image[sr][sc + 1] === initialColor &&
        !callHash.hasOwnProperty(`${sr}${sc + 1}`)
      ) {
        callHash[`${sr}${sc + 1}`] = true;
        floodFillLevel(sr, sc + 1);
      }
    }
    //BELOW
    if (sr + 1 !== rowLength) {
      if (
        image[sr + 1][sc] === initialColor &&
        !callHash.hasOwnProperty(`${sr + 1}${sc}`)
      ) {
        callHash[`${sr + 1}${sc}`] = true;
        floodFillLevel(sr + 1, sc);
      }
    }
    //ABOVE
    if (sr - 1 !== -1) {
      if (
        image[sr - 1][sc] === initialColor &&
        !callHash.hasOwnProperty(`${sr - 1}${sc}`)
      ) {
        callHash[`${sr - 1}${sc}`] = true;
        floodFillLevel(sr - 1, sc);
      }
    }
  };
  callHash[`${sro}${sco}`] = true;
  floodFillLevel(sro, sco);
  return image;
};

module.exports = floodFill;
