
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  _.extend(someInstance, stackMethods);

  return someInstance
};

var stackMethods = {};

stackMethods.push = function(value){

  var currentSize = this.size();

  this.storage[currentSize] = value;

  return currentSize;

};

stackMethods.pop = function(){

  var currentSize = this.size();

  var popValue = this.storage[currentSize-1];

  delete this.storage[currentSize-1];

  return popValue;
  
};

stackMethods.size = function(){

  return Object.keys(this.storage).length;

};
