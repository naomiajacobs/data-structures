var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){

    var sizeNow = someInstance.size();

    for (var i = sizeNow; i > 0; i--) {
      storage[i] = storage[i-1];
    }

    storage[0] = value;

  };

  someInstance.pop = function(){

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
