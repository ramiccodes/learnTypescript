let prices: number[] = [100, 75, 42];
// The syntax type[] can specify what values are in the array
// Example: number[] - array containing numbers, string[] - array containing strings
// TS would give out an error if we try to add a string to the prices array

// prices.push("hello");
// The push method adds whatever is inside the parenthesis inside the array which the method is invoked upon
// If a string is pushed into the prices array, it will give out an error.

let fruits: string[] = ["apple", "orange"];

// Empty bracket type means the variable is an array with no particular type
// let randomValues: [] = ['hello']

let names = ["peter", "susan", 1];
// without explicit typing, TS infers that the names array is string[] since the values inside the array are strings
// However, if we add a value other than string, TS infers the names variable as a union type of string | number

// Union type string | boolean array
let array: (string | boolean)[] = ["apple", true, "orange", false];

let temperatures: number[] = [20, 25, 30];
// temperatures.push("text");

let colors: string[] = ["red", "green", "blue"];
// colors.push(true);

let mixedArray: (number | string)[] = [1, "two", 3];
