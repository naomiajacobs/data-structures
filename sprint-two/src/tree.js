var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = []

  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  newBranch = Tree(value)
  this.children.push(newBranch)
};

treeMethods.contains = function(target){
  var bool = false
    
  var check = function(node) {
    if (node.value === target) {
      bool = true
    } else {
      _.each(node.children, function(item) {
        check(item)
      })
    }
  };

  check(this);

  return bool
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
