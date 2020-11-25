/**const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:` +  `[actual]` === `[expected]`);
  } else {
    console.log(`Assertion Failed: ` + `[actual]` !== '[expected]');
  }

};
assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(1, 1);**/
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j] && arr1.length === arr2.length){
        return true;
      }else{
        return false;
      }
    }
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false