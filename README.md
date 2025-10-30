# Binary Search Tree Implementation

This project implements a **Binary Search Tree (BST)** data structure in JavaScript, complete with various traversal algorithms, node operations, and tree balancing methods. It’s designed to demonstrate an understanding of recursion, data structures, and algorithmic problem-solving in JavaScript.

---

## Features

- **Node and Tree Classes:** Encapsulated logic for managing nodes and trees using ES6 classes.
- **Insert and Delete Operations:** Add or remove nodes dynamically while maintaining BST properties.
- **Search Functionality:** Find nodes and their parents efficiently.
- **Traversal Algorithms:**
  - Level-order (Breadth-First)
  - Pre-order
  - In-order
  - Post-order
- **Tree Utilities:**
  - Check if the tree is balanced
  - Calculate height and depth of nodes
  - Rebalance the tree automatically
  - Visualize the tree structure with pretty-print
- **Randomized Input:** Generate random arrays for building diverse trees.

---

## Concepts Learned & Practiced

- **Traversals:** Bredth-first search & Depth-first search.
- **Algorithmic Thinking:** Solving problems such as balance checking and rebalancing trees.

---

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/muktarkabir/binary-search-tree.git
   ```
2. Navigate to the project folder:
   ```bash
   cd binary-search-tree
   ```
3. Run the code in a Node.js environment:
   ```bash
   node index.js
   ```
4. Observe the printed binary tree, traversal results, and balance checks in your console.

## Project Structure

```bash
.
├── models/
│   ├── node.js     # Node class implementation
│   └── tree.js       #Tree class with all BST logic
├── utilities.js       # Random number generator
└── index.js           # Entry point demonstrating the tree in action

```
## Example Output
```bash
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
```
## Attribution
This project was developed for educational purposes through the odin project to practice data structures and algorithm design in JavaScript.