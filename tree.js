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
    let previous = null;
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
    if (!targetNode) return null;
    const isRoot = previous === null;
    if (targetNode.isAleafNode()) {
      if (isRoot) this.root = null;
      else if (targetNode.data > previous.data) previous.right = null;
      else previous.left = null;
    } else if (targetNode.hasOnlyOneChild()) {
      let child = targetNode.left ?? targetNode.right;
      if (isRoot) this.root = child;
      else if (targetNode.data < previous.data) previous.left = child;
      else previous.right = child;
    } else if (targetNode.hasBothChildren()) {
      let successorParent = targetNode;
      let successor = targetNode.right;
      while (successor.left != null) {
        successorParent = successor;
        successor = successor.left;
      }
      targetNode.data = successor.data;
      if (successorParent.left === successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    }
  }

  find(value) {
    if (!this.root) return null;
    let node = this.root;
    let parent = null;
    while (node) {
      if (node.data === value) {
        return { node, parent };
      }
      parent = node;
      node = value > node.data ? node.right : node.left;
    }
    return null;
  }

  levelOrderForEach(callback) {
    if (!callback) throw new Error("Provide Callback function");
    if (typeof callback !== "function")
      throw new Error("Callback must be a function");
    if (!this.root) return null;
    const queue = [this.root];
    while (queue.length !== 0) {
      let node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  preOrderForEach(callback, root = this.root) {
    if (root == null) return;
    callback(root);
    this.preOrderForEach(callback,root.left);
    this.preOrderForEach(callback,root.right);
  }
  inOrderForEach(callback, root = this.root) {
     if (root == null) return;
     this.inOrderForEach(callback,root.left);
     callback(root);
    this.inOrderForEach(callback,root.right);
  }
  postOrderForEach(callback, root = this.root) {
     if (root == null) return;
     this.postOrderForEach(callback,root.left);
     this.postOrderForEach(callback,root.right);
     callback(root);
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
// myTree.deleteItem(8);
myTree.printTree();
console.log(myTree.find(8));
otherTree.levelOrderForEach((node) => {
  console.log(node.data);
});
console.log('__________-_-_-_-___-_');

otherTree.preOrderForEach(node => console.log(node.data));
console.log('__________-_-_-_-___-_');

otherTree.inOrderForEach(node => console.log(node.data));
console.log('__________-_-_-_-___-_');
otherTree.postOrderForEach(node => console.log(node.data));
