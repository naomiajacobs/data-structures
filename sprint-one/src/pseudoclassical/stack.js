var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};

};

Stack.prototype.push = function(value) {

  var currentSize = this.size();

  this.storage[currentSize] = value;

  return currentSize;
};

Stack.prototype.pop = function() {

  var currentSize = this.size();

  var popValue = this.storage[currentSize-1];

  delete this.storage[currentSize-1];

  return popValue;
};

Stack.prototype.size = function() {

  return Object.keys(this.storage).length;

};