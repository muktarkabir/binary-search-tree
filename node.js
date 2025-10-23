export class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  hasBothChildren() {
    return this.left && this.right;
  }
  hasOnlyOneChild() {
    return this.left || this.right;
  }
  isAleafNode() {
    return !this.left && !this.right;
  }
}
