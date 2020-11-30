/**const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);**/

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const result = middle([1]);
    assert.deepEqual(result, []); 
  });
  it("returns [] for [1,2]", () => {
    const result = middle([1,2]);
    assert.deepEqual(result, []); 
  });

  it("returns [2] for [1,2,3]", () => {
    const result = middle([1,2,3]);
    assert.deepEqual(result, [2]); 
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    const result = middle([1,2,3,4]);
    assert.deepEqual(result, [2,3]); 
  });

  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    const result = middle([1,2,3,4,5,6]);
    assert.deepEqual(result, [3,4]); 
  });


});