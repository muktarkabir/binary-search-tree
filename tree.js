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
    let current = this.root;
    while (current) {
      if (current.data == value) break;
      if (value > current.data) {
        previous = current;
        current = current.right;
      } else if (value < current.data) {
        previous = current;
        current = current.left;
      }
    }

    console.log("Node to delete", current);
    console.log("Previous Node", previous);
    if (!previous) this.root = null;
    if (current.isAleafNode()) {
      current.data > previous.data ? previous.right = null : previous.left = null;
    } else if (current.hasOnlyOneChild()) {
        let temp = current.left ?? current.right;
        if (current.data < previous.data) {
          previous.left = temp;
        } else {
          previous.right = temp;
        }
    } else if (current.hasBothChildren()) {
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
myTree.printTree();
myTree.deleteItem(7);
myTree.printTree();
