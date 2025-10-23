import { Node } from "./node.js";
import { prettyPrint } from "./utilities.js";

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
}

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

const otherTree = new Tree([1, 2, 3, 4]);

prettyPrint(otherTree.root);
otherTree.insert(otherTree.root, 13);
otherTree.insert(otherTree.root, 13);
prettyPrint(otherTree.root);
