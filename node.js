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
    if ((this.left != null && this.right == null) || (this.left == null && this.right != null)) {
        return true;
    } else {
      return false;
    }
  }
  isAleafNode() {
    return !this.left && !this.right;
  }
}
