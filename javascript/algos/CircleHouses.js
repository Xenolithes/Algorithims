function createNode (value, previous = null, next = null) {
    let node = {
        value : value,
        next: next,
        previous: previous
    }
    return node
}

function createHouseCircle (numberOfHouses) {
    let head = createNode(1);
    let current = createNode(2, head)
    head.next = current
    for(var i = 3; i <= numberOfHouses; i++){
        let nextNode = createNode(i, current)
        current.next = nextNode
        current = nextNode;
    }
    current.next = head;
    head.previous = current;
    return head
}

// function logDoubleLinkedList (head) {
//     let seen = {}
//     let seenBool = false
//     let currentNode = head
//     while(!seenBool){
//         if(seen.hasOwnProperty(currentNode.value)){
//             seenBool = true;
//         }else{
//             seen[currentNode.value] = currentNode.value
//             currentNode = currentNode.next;
//         }
//     }
// }



function visitsOnCircularRoad(n, visitsOrder) {
 
    let houseDoubleLinkedList = createHouseCircle(n)
    let totaltraveltime = 0;
    let currentNode = houseDoubleLinkedList

    for (var i = 0; i < visitsOrder.length; i++) {
        let nextHouse = false
        let leftnode = currentNode.previous
        let rightnode = currentNode.next
        while(!nextHouse){
            if(currentNode.value === visitsOrder[i]){
                nextHouse=true;
            }else if(leftnode.value === visitsOrder[i]){
                nextHouse = true
                totaltraveltime++
                currentNode = leftnode;
            }else if(rightnode.value === visitsOrder[i]){
                nextHouse = true
                totaltraveltime++
                currentNode = rightnode;
            }else{
                leftnode = leftnode.previous
                rightnode = rightnode.next
                totaltraveltime++
            }
        }
    }
    return totaltraveltime;
}

console.log(visitsOnCircularRoad(5, [2,5,2,1,4]))

