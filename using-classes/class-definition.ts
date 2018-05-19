class Tree {
  constructor(public leaf: string) {
    this.leaf = leaf;
  }

  public moveLeaf() {
    console.log(`${this.leaf} is moving`);
  }
}

let tree1 = new Tree("Green leaf");
tree1.moveLeaf();
console.log(tree1.leaf);

