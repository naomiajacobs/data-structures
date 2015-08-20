var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){

    var currentSize = someInstance.size();

    storage[currentSize] = value;

    return currentSize;
  };

  someInstance.pop = function(){

    var currentSize = someInstance.size();

    var popValue = storage[currentSize-1];

    delete storage[currentSize-1];

    return popValue;

  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
