const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  for ( let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays (arr1, arr2);
  if (!result) {
    console.log("There was an issue and the array was altered");
  } else{
    console.log("Congratulations! Arrays are equal")
  }
}


const letterPositions = function(sentence, letter) {
  const results = {};
  // logic to update results here
  for (let position = 0; position < sentence.length; position++) 
 {
    if (sentence.charAt(position) == letter) 
      {
      results += 1;
      }
  }

  return results;
};

console.log(letterPositions("hello").o, [4]);