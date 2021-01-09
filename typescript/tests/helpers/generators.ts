class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BSTGenerator {
    constructor(){

    }
    _placeNode(tree: BST, val: number){
        function traverse (node: BST){
            if (node.right !== null && val > node.value) {
                traverse(node.right)
            } else if (node.left !== null && val < node.value) {
                traverse(node.left)
            }

            if(node.right === null && val > node.value){
                node.right = new BST(val);
            }else if( node.left === null && val < node.value){
                node.left = new BST(val);
            }
        }
        traverse(tree);
    }
    generateRandomBST (numberOfNodes: number = 10): BST {
        const start = Math.floor(Math.random() * 100);
        const head = new BST( start );
        for(let i = 0; i <= numberOfNodes; i += 1 ){
            const newVal = Math.floor(Math.random() * 100);
            this._placeNode(head, newVal);
        }
        return head;
    }

    generateBST(arrVal: number[]): BST {
        const head = new BST( arrVal[0] );
        for(let i = 1; i <= arrVal.length; i += 1 ){
            this._placeNode(head, arrVal[i]);
        }
        return head;
    }
}