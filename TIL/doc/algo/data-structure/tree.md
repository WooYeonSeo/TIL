## Tree의 종류

- Binary Tree : child node 가 최대 2개까지 생기는것
- ternary Tree : child node 가 최대 3개

### balance vs unvalance

red black tre

AVL Tree

### binary Search Tree

- 왼쪽은 헤드보다 작고 오른쪽은 헤드보다 큰 것

### Complete Binary Tree

노드가 왼쪽부터 차례대로 찬 것 

### Full Binary Tree

노드가 차일드가 없거나 두개로 꽉 찬것 

### Perfect Binary Tree

모든 노드가 자식을 딱 맞게 가지고 있는 경우 

## Binart Tree Traversals: 트리순회

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a388bba-7b28-4f3b-aa1f-dffcaa4d0475/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a388bba-7b28-4f3b-aa1f-dffcaa4d0475/Untitled.png)

- inorder : left root right

    ⇒ 4 2 5 1 3

- post order left right root

    ⇒ 4 5 2 3 1

- pre order : root left right

    ⇒ 1 2 4 5 3
    
```javascript
class Node {
  constructor() {
    this.data;
    this.left;
    this.right;
  }
}

class Tree {
  constructor() {}
  setRoot(node) {
    this.root = node;
  }
  getRoot() {
    return this.root;
  }
  makenode(left, data, right) {
    const node = new Node();
    node.data = data;
    node.left = left;
    node.right = right;
    return node;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

const tree = new Tree();
const no4 = tree.makenode(null, 4, null);
const no5 = tree.makenode(null, 5, null);
const no2 = tree.makenode(no4, 2, no5);
const no3 = tree.makenode(null, 3, null);
const no1 = tree.makenode(no2, 1, no3);

tree.setRoot(no1);
tree.inorder(tree.getRoot());  

```
