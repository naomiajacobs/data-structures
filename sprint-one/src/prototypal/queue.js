var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {

  var currentSize = this.size();

  this.storage[currentSize] = value;

  return currentSize;
};

queueMethods.dequeue = function() {
  var popVariable = this.storage[0]
  delete this.storage[0]
  var currentSize = this.size()

  for (var i = 1; i <= currentSize; i++) {
    this.storage[i - 1] = this.storage[i]
    if (i === currentSize) {
      delete this.storage[i]
    }
  }
  return popVariable;
};

queueMethods.size = function() {

  return Object.keys(this.storage).length;

};
