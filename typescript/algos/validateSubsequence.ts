/**
 * 
 * 
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.


  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers 
 * 
 * 
 */

export class ValidateSubsequence {
    constructor(){

    }
    firstSolution(array: number[], sequence: number[]): boolean{
        if(sequence.length > array.length){
            return false;
        }
        let arrPointer: number = 0
        let sequencePointer: number = 0
        for(arrPointer; arrPointer < array.length; arrPointer+=1){
            if(array[arrPointer] === sequence[sequencePointer]){
                sequencePointer += 1
            }

            if(sequence.length === 1 && sequencePointer === 1){
                return true
            } else if(sequencePointer === sequence.length && sequence.length > 1){
                return true
            }
        }
        
        return false
    }
}