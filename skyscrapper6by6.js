function solvePuzzle(clues) {
    // Start your coding here...
     if(clues.length === 24) {
     clues.unshift(0);
     }
   var build = {
     firstLine : ['/', clues[0], clues [1], clues[3], clues[4], clues[5], clues[6], '\\'],
     secndLine : [clues[24], 0, 0, 0, 0, 0, 0, clues[7]],
     thirdLine : [clues[23], 0, 0, 0, 0, 0, 0, clues[8]],
     fourtLine : [clues[22], 0, 0, 0, 0, 0, 0, clues[9]],
     fifthLine : [clues[21], 0, 0, 0, 0, 0, 0, clues[10]],
     sixthLine : [clues[20], 0, 0, 0, 0, 0, 0, clues[11]],
     sevenLine : [clues[19], 0, 0, 0, 0, 0, 0, clues[12]],
     eightLine : ['\\', clues[18], clues[17], clues[16], clues[15], clues[14], clues[13], '/']
  }
    var consoleString= ''
    for(var keys in build) {
      consoleString += build[keys] + '\n';
    }
    consoleString = consoleString.replace(/,/g, '');
    console.log(consoleString)
  }


  function creator (clue, instances) {

    if( instance === 1){
        for(var i = 2; i < 7; i++){
            
        }


    }
    

  }