//---- SLOWEST ----//
// var numJewelsInStones = function(J, S) {
//     const jewelCases = new RegExp(`[${J.split('')}]`, "g") //?
//     const cases = S.match(jewelCases) //?
//     if(!cases){
//       return 0
//     }else{
//       return cases.length
//     }
// };

// const numJewelsInStones = function(J, S) {
//   const JSet = new Set(J)
//   return S.split("").reduce( (acc, curr) => {
//     return JSet.has(curr) ? acc += 1 : acc
//   }, 0)
// }

// const numJewelsInStones = function(J, S) {
//   const jewelHash = {}
//   J.split("").forEach(jewel => {
//     jewelHash[jewel] = true
//   })
//   let currentCount = 0
//   S.split("").forEach(stone => {
//     if(jewelHash[stone]){
//       currentCount++
//     }
//   })
//   return currentCount
// }

//---- FASTEST ----//
const numJewelsInStones = function(J, S) {
  const jewelHash = {}
  J.split("").forEach(jewel => {
    jewelHash[jewel] = true
  })
  return S.split("").reduce((acc, curr) => {
    return jewelHash[curr] ? acc += 1 : acc
  }, 0)
}

module.exports = numJewelsInStones