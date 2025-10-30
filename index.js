import { Tree } from "./models/tree.js";

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

const otherTree = new Tree([1, 2, 3, 4]);

otherTree.insert(13);
otherTree.insert(70);
otherTree.insert(59);

// otherTree.printTree();
// myTree.printTree();
// myTree.deleteItem(9);
// myTree.deleteItem(4);
// myTree.deleteItem(8);
// myTree.printTree();
// myTree.deleteItem(67);
otherTree.printTree();
// myTree.deleteItem(8);
// myTree.printTree();
// console.log(myTree.find(8));
// otherTree.levelOrderForEach((node) => {
//   console.log(node.data);
// });
// console.log("__________-_-_-_-___-_");

// otherTree.preOrderForEach((node) => console.log(node.data));
// console.log("__________-_-_-_-___-_");

// otherTree.inOrderForEach((node) => console.log(node.data));
console.log("__________-_-_-_-___-_");
// otherTree.postOrderForEach((node) => console.log(node.data));
let height = myTree.height(8);
// console.log(height);
// console.log(myTree.depth(5));

// console.log(otherTree.isBalanced());
