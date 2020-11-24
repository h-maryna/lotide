let arr = [];
function head(arr){
  return arr[0];
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:` +  `[actual]` === `[expected]`);
  } else if(actual !== expected){
    console.log(`Assertion Failed: ` + `[actual]` !== '[expected]');
  } else if(actual === [] || expected === []){
    console.log(`undefined`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(1, 1);

assertEqual(head([5,6,7], 5));
assertEqual(head(["Head", "Lighthouse", "Labs"]), "Hello");