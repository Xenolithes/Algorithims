export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value: number): BST {
        function traverse(node: BST): void {
            if (value > node.value) {
                if (node.right) {
                    traverse(node.right)
                } else {
                    node.right = new BST(value);
                }
            } else if (value < node.value) {
                if (node.left) {
                    traverse(node.left)
                } else {
                    node.left = new BST(value)
                }
            }
        }
        traverse(this);
        // Do not edit the return statement of this method.
        return this;
    }

    contains(value: number): boolean {
			let output: boolean | null = null
        function traverse(node: BST) {
            if (node.value === value) {
                output = true
            } else if (value > node.value) {
                if (node.right) {
                    traverse(node.right)
                } else {
                    output = false;
                }
            } else if (value < node.value) {
                if (node.left) {
                    traverse(node.left)
                } else {
                    output = false
                }
            }
        }
			traverse(this);
        return output === null ? false : output;
    }

    remove(value: number): BST {

        let nodeToReplace: BST | null = null;
        let cloestNode: BST | null = null;
        let previousNodeToClosest: BST | null = null;
        let previousNode: BST | null = null;

        function traverse(node: BST) {
            if (nodeToReplace) {
                if (!cloestNode) {
                    previousNodeToClosest = previousNode
                    cloestNode = node
                } else {
                    let oldDifference = Math.abs(nodeToReplace.value - cloestNode.value);
                    let newDifference = Math.abs(nodeToReplace.value - node.value);
                    if (newDifference < oldDifference) {
                        previousNodeToClosest = previousNode
                        cloestNode = node
                    } else if (newDifference === oldDifference) {
                        if (node.value > cloestNode.value) {
                            previousNodeToClosest = previousNode
                            cloestNode = node;
                        }
                    }
                }
            }

            if (node.value === value && !nodeToReplace) {
                nodeToReplace = node
            }

            if (node.left || node.right) { previousNode = node; }

            if (value > node.value && !nodeToReplace) {
                if (node.right) {
                    traverse(node.right)
                }
            } else if (value < node.value && !nodeToReplace) {
                if (node.left) {
                    traverse(node.left)
                }
            } else if (nodeToReplace) {
                if (node.right) {
                    traverse(node.right)
                }
                if (node.left) {
                    traverse(node.left)
                }
            }
        }
        traverse(this);

        if (cloestNode && nodeToReplace ) {
            nodeToReplace.value = cloestNode.value;
            const leftNextNode: BST | null = cloestNode.left;
            const rightNextNode: BST | null = cloestNode.right;
            if (previousNodeToClosest) {
                if (previousNodeToClosest.right.value === cloestNode.value) {
                    previousNodeToClosest.right = null
                } else if (previousNodeToClosest.left.value === cloestNode.value) {
                    previousNodeToClosest.left = null;
                }
            }
            if(leftNextNode){
                this.insert(leftNextNode.value)
            }
            if(rightNextNode){
                this.insert(rightNextNode.value)
            }
        }
        // Do not edit the return statement of this method.
        return this;
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
        function traverseAndAdd(node: BST, sum: number) {
            const currSum = node.value + sum;
            if (node.left !== null) {
                traverseAndAdd(node.left, currSum);
            }
            if (node.right !== null) {
                traverseAndAdd(node.right, currSum);
            }

            if (node.left === null && node.right === null) {
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
        function traverse(node: BST, currDepth: number) {
            const currVal = currDepth + 1;
            totalDepth += currVal

            if (node.left) {
                traverse(node.left, currVal);
            }
            if (node.right) {
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