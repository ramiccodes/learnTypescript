// Practical application of type annotation
const books = ["1984", "Game of Thrones", "LOTR"];
let foundBook: string | undefined;
//

// set up a loop where it iterates over the books array and if it matches, set it as the value of foundBook
for (let book of books) {
  if (book === "Game of Thrones") {
    foundBook = book;

    foundBook = foundBook.toUpperCase();
    break;
  }
}

// Since the loop above can either set a string value if it matches a value in the array or NOT find the value in the array as undefined,
// we can set the foundBook variable as a union type of either 'string' or 'undefined'

// If we decide to set foundBook with a hardcoded value
// foundBook = 10;
// Regular JavaScript isn't going to stop us from returning the wrong value if the type of foundBook is not specified

console.log(foundBook?.length);

// ## Challenge

// - Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// - Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

// Literal type example
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

// Union type example
let discount: number | string = 20;
discount = "20%";
