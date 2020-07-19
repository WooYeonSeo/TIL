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
    this.minValue = -19999;
  }
  makeTree(arr, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);
    node.left = this.makeTree(arr, start, mid - 1);
    node.right = this.makeTree(arr, mid + 1, end);

    return node;
  }
  isBalanced(root) {
    if (root == null) return true;
    let heightDiff = this.getHeight(root.left) - this.getHeight(root.right);
    console.log("root", root);
    console.log("heightDiff", this.getHeight(root.left));
    console.log("heightDiff", this.getHeight(root.right));
    if (Math.abs(heightDiff) > 0) return false;
    return true;
    //else return true; //this.isBalanced(root.left) && this.isBalanced(root.right); // 이건 필요 없지 않나? ㄴㄴ
  }
  getHeight(root) {
    if (root == null) return -1;
    const temp =
      Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    //console.log("getHeight root", root);
    //console.log("temp", temp);
    return temp;
  }

  isBalanced2(root) {
    return this.checkHeight(root) !== this.minValue;
  }
  checkHeight(root) {
    if (root == null) return -1;
    let leftHeight = this.checkHeight(root.left);
    if (leftHeight == this.minValue) {
      return this.minValue;
    }

    let rightHeight = this.checkHeight(root.right);
    if (rightHeight == this.minValue) {
      return this.minValue;
    }

    let heightDiff = leftHeight - rightHeight;
    if (Math.abs(heightDiff) > 1) {
      return this.minValue;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

// setup
let arr = [1, 3, 11, 20, 22].sort((a, b) => a - b);

console.log(arr);
let tree = new Tree(arr);
tree.root.right.right = new Node(33);
//tree.root.right.right.right = new Node(50);
// tree.root.right.right.right.right = new Node(55);
// isBinaryTree?
console.log(tree.isBalanced(tree.root));
console.log(tree.isBalanced2(tree.root));
