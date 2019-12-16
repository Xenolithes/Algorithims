function humanReadable(seconds) {
  // TODO
   let hours = Math.floor(seconds / 3600)
   seconds = seconds - (hours *  3600);
   let min = Math.floor(seconds / 60);
   seconds = seconds - (min * 60);
   
   let output = '';
   
   if(hours === 0){
     output = '00:';
    }else if(hours < 10){
     output = `0${hours}:`
    }else if(hours> 10){
     output = hours + ':'
    }
    
    if(min === 0){
      output += '00:'
     }else if(min < 10){
      output += `0${min}:`
     }else if(min > 10){
      output += min + ':'
    }
     
     
     if(seconds === 0){
      output += '00'
      }else if(seconds < 10){
       output += `0${seconds}:`
      }else if(seconds > 10){
       output += seconds
      }
      
      return output;
  
}