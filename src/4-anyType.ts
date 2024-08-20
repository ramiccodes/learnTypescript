// "any" type
// The 'any' type sets the variable type as any type ('number, boolean, string, etc.')
let notSure: any = 6;
notSure = "maybe a string";
// No errors switching the notSure variable from a number type to a string
notSure = false;
// Using the "any" type however, defeats the purpose of TypeScript, make sure to use purposefully

let random;
// This variable above have the type of 'any'
