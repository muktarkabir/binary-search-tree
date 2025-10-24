import { Node } from "./node.js";

class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(array);
  }
  insert(root, value) {
    if (root == null) {
      return new Node(value);
    }
    if (value < root.data) {
      root.left = this.insert(root.left, value);
    } else if (value > root.data) {
      root.right = this.insert(root.right, value);
    }
    return root;
  }
  deleteItem(value) {
    let previous;
    let targetNode = this.root;
    while (targetNode) {
      if (targetNode.data == value) break;
      if (value > targetNode.data) {
        previous = targetNode;
        targetNode = targetNode.right;
      } else if (value < targetNode.data) {
        previous = targetNode;
        targetNode = targetNode.left;
      }
    }

    // console.log("Node to delete", targetNode);
    // console.log("Previous Node", previous);
    // if (!previous) this.root = null;
    if (targetNode.isAleafNode()) {
      targetNode.data > previous.data
        ? (previous.right = null)
        : (previous.left = null);
    } else if (targetNode.hasOnlyOneChild()) {
      let temp = targetNode.left ?? targetNode.right;
      targetNode.data < previous.data
        ? (previous.left = temp)
        : (previous.right = temp);
    } else if (targetNode.hasBothChildren()) {
     console.log("Need some extra work");
     
    }
  }

  buildTree(array) {
    let sortedArrayToSet = new Set(array.sort((a, b) => a - b));
    let uniqueArray = [...sortedArrayToSet];

    const sortedArrayToBSTRecur = (arr, start, end) => {
      if (start > end) return null;
      let mid = start + Math.floor((end - start) / 2);
      let root = new Node(arr[mid]);
      // Divide from middle element
      root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
      root.right = sortedArrayToBSTRecur(arr, mid + 1, end);
      return root;
    };

    return sortedArrayToBSTRecur(uniqueArray, 0, uniqueArray.length - 1);
  }
  printTree = () => this.prettyPrint(this.root);

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

const otherTree = new Tree([1, 2, 3, 4]);

otherTree.insert(otherTree.root, 13);
otherTree.insert(otherTree.root, 0);
otherTree.insert(otherTree.root, 59);

// otherTree.printTree();
// myTree.printTree();
// myTree.deleteItem(9);
// myTree.deleteItem(4);
// myTree.deleteItem(8);
myTree.printTree();
myTree.deleteItem(67);
myTree.printTree();
myTree.deleteItem(8);
myTree.printTree();
