function sumIntervals(intervals){
    //TODO
    
    arr1 = [];
    for(var i = 0; i < intervals.length; i++){
      for(var y = (intervals[i][0] + 1); y <= intervals[i][1]; y++){
        arr1.push(y);
      }
    }
  
  var total = new Set(arr1);
  arr1 = [...total];
  return arr1.length;
  
  }

//Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
//Intervals
//Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.