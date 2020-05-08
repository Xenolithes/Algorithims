var checkStraightLine = function(coordinates) {
  if(coordinates.length === 1) return false
  if(coordinates.length === 2) return true
  let pt1 = coordinates[0]
  let pt2 = coordinates[1]
  let xDiff = pt2[0] - pt1[0]
  let yDiff = pt2[1] - pt1[1]
  let slope = Math.abs(xDiff) / Math.abs(yDiff)
  for(let i = 2; i < coordinates.length; i+=1){
    let pt3 = coordinates[i - 1]
    let pt4 = coordinates[i]
    xDiff = pt4[0] - pt3[0]
    yDiff = pt4[1] - pt3[1]
    let tempSlope = Math.abs(xDiff) / Math.abs(yDiff)
    if(tempSlope !== slope){
      return false
    }
  } 
  return true
};