

console.log((3 + 2) % 6)

function volleyballPositions(formation, k) {
    let positionRotation = k % 6
    if (positionRotation === 0){
        return formation
    }
    console.log(formation)
    let players = {
        "1":formation[3][2],
        "2":formation[1][2],
        "3":formation[0][1],
        "4":formation[1][0],
        "5":formation[3][0],
        "6":formation[2][1],
    }
    for (var oldposition in players){
       let newposition = (parseInt(oldposition) + positionRotation) % 6
       
        switch(newposition){
            case 1:
                formation[3][2] = players[oldposition];
                break;
            case 2:
                formation[1][2] = players[oldposition];
                break;
            case 3:
                formation[0][1] = players[oldposition];
                break;
            case 4:
                formation[1][0] = players[oldposition];
                break;
            case 5:
                formation[3][0] = players[oldposition];
                break;
            case 0:
                formation[2][1] = players[oldposition];
                break;
            default:
                console.log("default")
        }
    }

    return formation
}

console.log(volleyballPositions([["empty","Player5","empty"], 
["Player4","empty","Player2"], 
["empty","Player3","empty"], 
["Player6","empty","Player1"]], 2))
