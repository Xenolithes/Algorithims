function validSolution(board){
 
  if(allColumns(board)){
    console.log('column')
    return false
  }
  
  if(allRows(board)){
    console.log('row')
    return false
  }
  
  if(allSectors(board)){
  console.log('sector')
    return false
  }
   
   return true
 }
 
   function allSectors (board) {
     for(var t = 0; t < 9; t += 3){
         temp1 = []
         temp2 = []
         temp3 = []
         for(var i = t; t < (i+3); t++){
             temp1.push(...board[t].slice(0,3).splice(0,3))
             temp2.push(...board[t].slice(3,6).splice(0,3))
             temp3.push(...board[t].slice(6).splice(0,3))
             console.log
         }
         console.log(temp1)
         tempSet1 = new Set(temp1)
         tempSet2 = new Set(temp2)
         tempSet3 = new Set(temp3)
         console.log(tempSet1, tempSet2, tempSet3)
         
         
         if(tempSet1.size !== 9 || tempSet2.size !== 9 || tempSet3.size !== 9){
           return true   
         }
     }
     return false
   }
 
 function allColumns (board) {
   for(var y = 0; i < board[0].length; i++){
     let temp = [];
     for(var i = 0; i < board.length; i++){
       temp.push(board[i][y])
     }
     let tempSet = new Set(temp)
     if(tempSet.size !== 9){
       return true
     }
   }
  return false 
 }
 
 function oneRow (array) {
   let tempSet = new Set(array);
   if(tempSet.size === 9) return false
   return true
 }
 
 function allRows (board) {
   for(var i = 0; i < board.length; i++) {
     if(oneRow(board[i])) {
       return true
     }
   }
 return false
 }