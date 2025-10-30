import { Tree } from "./models/tree.js";
import { randomNumbers } from "./utilities.js";

const arrayOfNumbers = randomNumbers();
const myTree = new Tree(arrayOfNumbers);
myTree.printTree();
`
│               ┌── 93
│           ┌── 92
│       ┌── 89
│       │   │   ┌── 76
│       │   └── 75
│   ┌── 71
│   │   │       ┌── 69
│   │   │   ┌── 64
│   │   └── 59
│   │       └── 51
└── 43
    │           ┌── 41
    │       ┌── 39
    │   ┌── 30
    │   │   │   ┌── 28
    │   │   └── 23
    └── 20
        │       ┌── 19
        │   ┌── 11
        └── 9
            └── 5
`;
myTree.isBalanced(); //true
myTree.levelOrderForEach(node=> console.log(node.data));
myTree.inOrderForEach(node=> console.log(node.data));
myTree.preOrderForEach(node=> console.log(node.data));
myTree.postOrderForEach(node=> console.log(node.data));

myTree.insert(200);
myTree.insert(300);
myTree.insert(400);

myTree.isBalanced(); //false
myTree.reBalance();
myTree.isBalanced(); //true

