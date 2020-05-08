var isCousins = function(root, x, y) {
  const findDepth = (node, val, depth, previous=false) => {
    
    if(node.val === val){
      return {
        depth : depth,
        currentVal: node.val,
        parent: previous.val
      }
    }
    let right = false
    let left = false
    
    if(node.right !== null){
      right = findDepth(node.right, val, depth + 1, node)
    }
    
    if(node.left !== null){
      left = findDepth(node.left, val, depth + 1, node)
    }
    
    console.log(right, left)
    
    if(!left && !right){
      return false
    }else if(typeof left === "object"){
      return left
    }else if(typeof right === "object"){
      return right
    }
    
    return false
  }
  
  let xDepth = false
  let yDepth = false
  xDepth = findDepth(root, x, 0)
  yDepth = findDepth(root, y, 0)
  if( typeof xDepth === "object" && typeof yDepth === "object"){
    if(xDepth.depth === yDepth.depth && xDepth.parent !== yDepth.parent){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
};