// ###Graph Solution

// Instantiate a new graph
var Graph = function() {

  this.graphNodes = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
//Add test to see if node already exists
Graph.prototype.addNode = function(node) {

 this.graphNodes[node] = this.graphNodes[node] || [];
 this.graphNodes[node].connectedNodes = this.graphNodes[node].connectedNodes || {};

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){

  return this.graphNodes[node] ? true : false;

};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){

  delete this.graphNodes[node];

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

  var fromThisNode = this.graphNodes[fromNode];
  var toThisNode = this.graphNodes[toNode];

  if (fromThisNode && toThisNode) {

    return fromThisNode.connectedNodes[toNode] || toThisNode.connectedNodes[fromNode] ? true : false;

  } else {

    return false;

  }

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){

  var fromThisNode = this.graphNodes[fromNode];
  var toThisNode = this.graphNodes[toNode];

  if (fromThisNode && toThisNode) {

    fromThisNode.connectedNodes[toNode] = toNode;
    toThisNode.connectedNodes[fromNode] = fromNode

  } else {

    return false;

  }

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){

  var fromThisNode = this.graphNodes[fromNode];
  var toThisNode = this.graphNodes[toNode];


  if (fromThisNode && toThisNode) {

    delete fromThisNode.connectedNodes[toNode];
    delete toThisNode.connectedNodes[fromNode]

  }

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){

  _.each(this.graphNodes, function(item, key) {

    cb(key);

  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
