/* 
Write a function that will return the array combination with value summed at 5.
Important: Use only one "for" loop.
Example:
var rand_array = [1,3,5,2,4,6];
var target_sum = 5;
Output = [1,4], [5], [3,2], [2,3], [4,1];
*/

export function sumArray (rand_array: number[], target_sum: number): number[][]{
    const output: number[][] = [];
    for(let i = 0; i < rand_array.length; i += 1){
        if(rand_array[i] === 5){
         output.push([rand_array[i]])
        }else{
            for(let y = i + 1; y < rand_array.length; y += 1){
                if(y !== i){
                    if(rand_array[i] + rand_array[y] === 5){
                        output.push([rand_array[i] + rand_array[y]]);
                    }
                }
            }
        }
    }

    return output
}