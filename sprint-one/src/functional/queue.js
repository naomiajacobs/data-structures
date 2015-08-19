var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){

    var sizeNow = someInstance.size();

    storage[sizeNow] = value;

  };

  someInstance.dequeue = function(){

    var sizeNow = someInstance.size();

    if (sizeNow === 0) {
      return;
    }

    var result = storage[0];

    if (sizeNow === 1) {
      delete storage[0];
    }

    for (var i = 1; i < sizeNow; i++) {

      storage[i-1] = storage[i];
      if (i === sizeNow-1) {
        delete storage[i];
      }

    }

    return result;

  };

  someInstance.size = function(){

    return Object.keys(storage).length;

  };

  return someInstance;
};
