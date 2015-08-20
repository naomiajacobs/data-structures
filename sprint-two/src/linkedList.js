var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.node = Node;
  list.nodes = {};

  list.addToTail = function(value){
    this.nodes[value] = this.node(value);
    var newNode = this.nodes[value]

    if (this.tail === null) {
      this.tail = newNode
      this.head = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  };

  list.removeHead = function(){

    var currentHead = this.head
    var currentHeadValue = this.head.value
    var currentHeadNext = this.head.next

    delete this.nodes[currentHeadValue];

    this.head = currentHeadNext

    return currentHeadValue

  };

  list.contains = function(target){

    for (var n in this.nodes) {
      if (n === target.toString()) {
        return true;
      }
    }

    return false;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
