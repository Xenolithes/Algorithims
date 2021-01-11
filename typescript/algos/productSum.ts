export type specialArray = Array<number | specialArray>;

export function productSum (array: specialArray, currentDepth: number = 1): number {
    let output = 0;
    for(let i = 0; i < array.length; i+=1){
        if(Array.isArray(array[i])){
            const nxtArray = array[i] as specialArray;
            const arraySum = productSum(nxtArray, currentDepth + 1) 
            output += arraySum 
        }else if(typeof array[i] === "number"){
            const num = array[i] as number;
            output += num;
        }
    }
    return output * currentDepth;
}