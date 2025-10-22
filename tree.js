class Tree {
  constructor(array) {
    this.array = array;
    this.root = buildTree(array);
  }
}

function buildTree(array) {
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

  return sortedArrayToBSTRecur(uniqueArray);
}
