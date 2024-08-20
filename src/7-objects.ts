let car: {
  brand: string;
  year: number;
} = {
  brand: "toyota",
  year: 2020,
  // color: "blue",
};

// when a key is not specified as part of the types, you cannot set them as a value of the variable
// example: adding color:'blue' to an object without the 'color' key in the types

// Even when accessing the key value
car.brand = "ford";
// car.color = "blue"; - This gives out an error

let car1: {
  brand: string;
  year: number;
} = {
  brand: "audi",
  year: 2022,
};

// Whatever we set for type annotation needs to match what we have in the object otherwise TS will not allow it to compile

// Tying arrays with the objects
let book = {
  title: "book",
  cost: 20,
};
let pen = {
  title: "pen",
  cost: 10,
};
let notebook = {
  title: "notebook",
};

// The goal is to make sure every single one of these item objects contain the same keys
// The variable below causes an error because the notebook object doesn't match the type annotation of array of objects ({}[])
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// We can use an optional property ('?') to check if a key exists or not turning it into an optional parameter
// Adding the keyword 'readonly' in the type annotation makes the modifying the value of an object
// inside the array not allowed

// items[0].title = "new book";

// ## Challenge

// - Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
// - Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
// - Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

const bike: {
  brand: string;
  year: number;
} = {
  brand: "mustang",
  year: "2006",
};

const laptop: {
  brand: string;
  year: number;
} = {
  brand: "apple",
};

const minecraft: {
  title: string;
  price: number;
} = {
  title: "minecraft",
  price: "50",
};

const products: { title: string; price?: number }[] = [minecraft];

products.push({ title: "shoes", price: "20" });

// Even though the products type price is optional, when adding new objects to the
// objects array, it insists on using the right type as a value
