/**const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:` +  `[actual]` === `[expected]`);
  } else {
    console.log(`Assertion Failed: ` + `[actual]` !== '[expected]');
  }return assertEqual;

};
assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(1, 1);**/

function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
      for (var i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            console.log(`Assertion Failed: `);
          }
      }
      console.log(`Assertion Passed:`);
  } else {
    console.log(`Assertion Failed: ` );
  }
}


eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);