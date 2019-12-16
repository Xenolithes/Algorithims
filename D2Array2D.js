// Complete the hourglassSum function below.
//Input is an array of numbers
function hourglassSum(arr) {
let output = -Infinity;
let topRow;
let middle;
let bottomRow;
for(var i = 0; i < arr.length - 2; i++){
    for(var y = 0; y < arr[i].length - 2; y++){
        topRow  = arr[i][y] + arr[i][y+1] + arr[i][y+2]
        middle = arr[i+1][y+1]
        bottomRow = arr[i+2][y] + arr[i+2][y+1] + arr[i+2][y+2]
        let hourGlassTotal = topRow + middle + bottomRow
         if(output < hourGlassTotal){
             output = hourGlassTotal
         }
    }
}
 return output
}
//output is the hourglass with the highest sum
let input = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]
console.log(hourglassSum(input))