function solution(number){
    var multiples = []
    for (var i = 0; i < number; i++){
     if (i % 5 === 0 || i % 3 === 0){
      multiples.push(i);
     }
    }
    if(multiples.length === 0){
     return 0
    }
    return multiples.reduce( (x,y) => (y += x));
  }