class Node {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }
}
class Tree {
  constructor(arr) {
    this.root = this.makeTree(arr, 0, arr.length - 1);
  }
  makeTree(arr, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);
    node.left = this.makeTree(arr, start, mid - 1);
    node.right = this.makeTree(arr, mid + 1, end);

    return node;
  }
  isBinaryTree() {}
}

// setup
let arr = [1, 3, 4, 2, 11].sort((a, b) => a - b);
console.log(arr);
let tree = new Tree(arr);

// isBinaryTree?
