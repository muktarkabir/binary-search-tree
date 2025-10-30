import { Node } from "./node.js";

export class Tree {
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

  #checkForCallBack(callback) {
    if (!callback) throw new Error("Provide Callback function");
    if (typeof callback !== "function")
      throw new Error("Callback must be a function");
  }

  levelOrderForEach(callback) {
    this.#checkForCallBack(callback);
    if (!this.root) return null;
    const queue = [this.root];
    while (queue.length !== 0) {
      let node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  #preOrder(callback, node) {
    if (node == null) return;
    callback(node);
    this.#preOrder(callback, node.left);
    this.#preOrder(callback, node.right);
  }
  #inOrder(callback, node) {
    if (node == null) return;
    this.#inOrder(callback, node.left);
    callback(node);
    this.#inOrder(callback, node.right);
  }
  #postOrder(callback, node) {
    if (node == null) return;
    this.#postOrder(callback, node.left);
    this.#postOrder(callback, node.right);
    callback(node);
  }
  preOrderForEach(callback) {
    this.#checkForCallBack(callback);
    this.#preOrder(callback, this.root);
  }
  inOrderForEach(callback) {
    this.#checkForCallBack(callback);
    this.#inOrder(callback, this.root);
  }
  postOrderForEach(callback) {
    this.#checkForCallBack(callback);
    this.#postOrder(callback, this.root);
  }

  height(value) {
    let node = this.find(value).node;
    if (node == null) return null;
    else return this.#height(node);
  }

  #height(node) {
    if (node == null) return -1;
    let left = this.#height(node.left);
    let right = this.#height(node.right);
    return 1 + Math.max(left, right);
  }

  depth(value, node = this.root, level = 0) {
    if (node == null) return null;
    if (node.data == value) return level;
    if (value > node.data) return this.depth(value, node.right, (level += 1));
    else return this.depth(value, node.left, (level += 1));
  }

  isBalanced(node = this.root) {
    if (node == null) return true;
    let left = this.#height(node.left);
    let right = this.#height(node.right);

    if (Math.abs(left - right) > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  reBalance(){

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
  printTree = () => this.#prettyPrint(this.root);

  #prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.#prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.#prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

