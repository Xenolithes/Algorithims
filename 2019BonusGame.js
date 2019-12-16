function calc(cards){
    //coding and coding..
    console.log(8 + 36 + 48 + 16 + 96 + 64 + 384 + 512 + 2560)
    let coefficient = 2
    let total = 0
    let temp = cards[0]
    while(cards.length > 0){
      
      if(cards[0] < cards[cards.length - 1]){
        temp = cards.shift();
        total += temp * coefficient
      }else if(cards[0] > cards[cards.length - 1]){
        temp = cards.pop();
        total += temp * coefficient
                
      }else if(cards.length === 1){
        total += cards[0] * coefficient;
        return total
      }else if(cards[0] === cards[cards.length - 1]){
      
        if(cards[1] > cards[cards.length - 2]){
          temp = cards.pop();
          total += temp * coefficient
        }else if(cards[1] < cards[cards.length - 2]){
           temp = cards.shift();
           total += temp * coefficient
        }else if(cards.length === 2){
           return total += (cards[0] * coefficient) + (cards[cards.length - 1] * (coefficient * 2))
        }else if(cards.length === 3){
           return total += (cards[0] * coefficient) + (cards[cards.length - 1] * (coefficient * 2) + (cards[1] * (coefficient * 4)))
        }

      }
      coefficient = coefficient * 2;
    }
   return total
  }