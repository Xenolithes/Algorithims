export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name: string) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(): string[] {
      const output: string[] = []
      function depthFirst (node: Node): void{
        output.push(node.name);
        for(let i = 0; i < node.children.length; i+=1){
          depthFirst(node.children[i])
        }
      }
      depthFirst(this)
      return output ;
    }
  }