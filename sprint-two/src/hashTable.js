var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[i];

  //find the index that the tuble should be inserted at
  if (this._storage[i] === undefined ) {

    this._storage[i] = [];

  }

  this._storage[i].push([k, v]);

};

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[i];

  var result;

  _.each(bucket, function(tuple, index) {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });

  return result;

};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[i];

  var temp;

  _.each(bucket, function(tuple, j) {

    if(tuple[0] === k) {

      var temp = bucket[j][i];
      bucket[j][1] = null;
    }
  });

  return temp;

};