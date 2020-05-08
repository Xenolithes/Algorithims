//Describing some of the binary tree functions within an object

const BinaryTreeCreator = (rootValue, array) => {
 
  
  const filler = (array) => {
    let last; 
    for(let i = 0; i < array.length; i++){
      
    }
  }
  
  const searchValue = (value) => {
    if(this.value === value){
      return true
    }
    if(this.value > value){
      if(this.left === null){
        return false
      }else{
        return this.left.searchValue(value)
      }
    }else if (this.value < value){
      if(this.right === null){
        return false
      }else{
        return this.right.searchValue(value)
      }
    }
  }

  const findNode = (value) => {
    if(this.value === value){
      return true
    }
    if(this.value > value){
      if(this.left === null){
        return false
      }else{
        return this.left.search(value)
      }
    }else if (this.value < value){
      if(this.right === null){
        return false
      }else{
        return this.right.search(value)
      }
    }
  }


  
  const nodeCreator = (value, left = null, right = null, previous = null) => {
    return {
      left,
      right,
      previous,
      value,
      treeFiller:treeFiller,
      treeSearch:treeSearch
    }
  }
  let tree = nodeCreator(rootValue)




  








  return rootNode
}