function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

// The parameter 'name' above is marked by typescript as having the
// 'any' type, TS implicitly types parameters with the any type
// This forces us to use TS immediately

// There are three ways to fix this
// 1. set it as type 'any'
// 2. change configuration in tsconfig
// 3. properly type the parameter

sayHi("ramic");
// sayHi(7);

// Function returns

function calculateDiscount(price: number): number {
  return price * 0.9;
}

// let discountString = calculateDiscount(20);

const finalPrice = calculateDiscount(200);

// console.log(`The discount for this purchase is ${discountString}%`);

// It's very helpful to set up the return type explicitly when making the
// function, so that the return value sticks to the expected type
// example: function calculateDiscount(price: number): number {}

// function addThree(number: any) {
//   let anotherNumber: number = 3;
//   return number + anotherNumber;
// }

// const result = addThree(3);

// const someValue = result;

// someValue.myMethod()

// ## Challenge

// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// - Use this function to check if various names are in your array and log the results.

const names: string[] = ["ramic", "john"];

const nameExists = (nameParam: string): boolean => {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === nameParam) {
      console.log(names[i]);
      return true;
    }
  }
};

// function isNameInList(name:string): boolean {
// return names.includes(name)
// }

const randomName = nameExists("john");
console.log(randomName);
console.log(names.length);
