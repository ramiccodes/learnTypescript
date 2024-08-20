// What type should we return if we're not returning anything from the function?

function logMessage(message: string): void {
  console.log(message);
  return "hello world";
}

// The function above has the return type set as 'void'
// 'void' is a special type that represents the abscence of a value
logMessage("Hello Typescript");

// If you specifically type the return of a function as 'void', and then try to return something, TS will give out an error

// ### Challenge

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// - If the input is of type string, the function should convert the string to uppercase and log the result to the console.

const processInput = (input: string | number): string | number | void => {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  }

  if (typeof input === "number") {
    console.log(input * 2);
  }
};

processInput("yeayea");

// TypeGuard - official name, used to check parameter at runtime
// Most common is the 'typeof' keyword
