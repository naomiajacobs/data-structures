var BinarySearchTree = function(value){

  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;

  newTree.left = null;

  newTree.right = null;

  return newTree;

};

BinarySearchTree.prototype = {};

BinarySearchTree.prototype.insert = function (value) {

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }

  } else if (value >= this.value) {
    if (this.right == null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

BinarySearchTree.prototype.contains = function (value) {

  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }

  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }

};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(func);
  } else if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};