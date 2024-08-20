function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

console.log(priceAfterDiscount);

// To make an optional parameter, you need to add a question mark
// Functions with optional parameters must work when they're not supplied

// discount in this case could possibly be undefined, since it is an
// optional parameter

// We can use the OR operator "||" to use another value if discount is
// undefined

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(100);

// By setting the parameter penaltyPoints as = 0, when it is not
// provided when the function is called, the penaltyPoints parameter will
// have the value of 0

// Working with REST parameters

// The rest parameter syntax allows a function to accept an indefinite
// number of arguments as an array, providing a way to represent variadic
// functions in JavaScript.

// In Vanilla JS, REST parameters are treated as arrays
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return `${message}${total}`;
}

let result = sum("The total is: ", 1, 2, 3, 4, 5);

console.log(result);
