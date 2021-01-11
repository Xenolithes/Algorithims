export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BSTmethods {
    constructor() {

    }
    /**
     * 
     * @param tree 
     * 
    Write a function that takes in a Binary Search Tree (BST) and a target integer
    value and returns the closest value to that target value contained in the BST.

    Each BST node has an integer value, a
    left child node, and a right child node. A node is
    said to be a valid BST node if and only if it satisfies the BST
    property: its value is strictly greater than the values of every
    node to its left; its value is less than or equal to the values
    of every node to its right; and its children nodes are either valid
    BST nodes themselves or None / null.

     * @param target 
     */
    findClosestValueInBst(tree: BST, target: number) {
        let closest: number = tree.value;
        function recurse(treeBST: BST): void {
            let closestAbs: number;
            let targetAbs: number;

            closestAbs = Math.abs(target) - Math.abs(closest);
            targetAbs = Math.abs(target) - Math.abs(treeBST.value);
            if (Math.abs(targetAbs) < Math.abs(closestAbs)) {
                closest = treeBST.value;
            }

            if (treeBST.right !== null && target > treeBST.value) {
                recurse(treeBST.right)
            } else if (treeBST.left !== null && target < treeBST.value) {
                recurse(treeBST.left)
            }
        }
        recurse(tree)
        // Write your code here.
        return closest;
    }


    /***
     * 
    Write a function that takes in a Binary Tree and returns a list of its branch
    sums ordered from leftmost branch sum to rightmost branch sum.


    A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
    branch is a path of nodes in a tree that starts at the root node and ends at
    any leaf node.
     */

    branchSums(root: BST): number[] {
        const output: number[] = [];
        function traverseAndAdd(node: BST, sum: number){
            const currSum = node.value + sum;
            if(node.left !== null){
                traverseAndAdd(node.left, currSum);
            }
            if(node.right !== null) {
                traverseAndAdd(node.right, currSum);
            }

            if(node.left === null && node.right === null){
                output.push(currSum);
            }
        }
        traverseAndAdd(root, 0);

        return output;
      }


      /**
       * 
    The distance between a node in a Binary Tree and the tree's root is called the
    node's depth.


    Write a function that takes in a Binary Tree and returns the sum of its nodes'
    depths.
       */

      nodeDepths(root: BST): number {
        let totalDepth: number = 0;
        function traverse (node: BST, currDepth: number){
            const currVal = currDepth + 1;
            totalDepth += currVal

            if(node.left){
                traverse(node.left, currVal);
            }
            if(node.right){
                traverse(node.right, currVal);
            }
        }
        traverse(root, -1);
        return totalDepth;
      }


      /***
       * 
    You're given a Node class that has a name and an
    array of optional children nodes. When put together, nodes form
    an acyclic tree-like structure.

    
       */
}