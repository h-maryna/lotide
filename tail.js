const assertEqual = require('./assertEqual');

const tail = function(arr){
  let a = arr.slice(1,arr.length);
  return a ;
};


module.exports = assertEqual;
module.exports = tail;