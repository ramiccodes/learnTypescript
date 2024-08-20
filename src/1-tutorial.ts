let awesomeName: string = "shakeAndBake";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// This is not valid
// awesomeName = 4;

let amount: number = 20;
amount = 12 - 1;
// amount = 'pants'

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake'

// ## Challenge 1

// - Create a variable of type string and try to invoke a string method on it. **
// - Create a variable of type number and try to perform a mathematical operation on it. **
// - Create a variable of type boolean and try to perform a logical operation on it. **
// - Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response. **
// - You can use type annotation or inference **

let filipinoFood: string = "adobo";
let capitalized = filipinoFood.toUpperCase();
console.log(capitalized);
// filipinoFood = 3;

let numberOfContinents: number = 7;
let numberOfContinentsWithoutAsia = numberOfContinents - 1;
console.log(numberOfContinentsWithoutAsia);
// numberOfContinents = "asia";

let isGarbageDay: boolean = false;
if (isGarbageDay === false) {
  console.log("dont bring out the trash");
} else {
  console.log("bring out the trash");
}

// isGarbageDay = "totropahin";

console.log(filipinoFood, numberOfContinents, isGarbageDay);
