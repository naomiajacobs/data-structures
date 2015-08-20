var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var currentSize = someInstance.size();

    storage[currentSize] = value;

    return currentSize;
  };

  someInstance.dequeue = function(){
    var popVariable = storage[0]
    delete storage[0]
    var currentSize = someInstance.size()

    for (var i = 1; i <= currentSize; i++) {
      storage[i - 1] = storage[i]
      if (i === currentSize) {
        delete storage[i]
      }
    }
    
    return popVariable
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
