export function findThreeLargestNumbers(array: number[]): number[] {
    let highest: number = -Infinity;
    let middle: number = -Infinity;
    let lowest: number = -Infinity;

    array.forEach(number => {
        if(!highest || number > highest){
            lowest = middle;
            middle = highest;
            highest = number;
        }else if (!middle || number > middle){
            lowest = middle;
            middle = number;
        } else if(!lowest || number > lowest){
            lowest = number;
        }
    })

    return [lowest, middle, highest]
}