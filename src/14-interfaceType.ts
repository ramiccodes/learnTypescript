//  Interface type allows us to set up shape for objects (only objects)

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
  // price: 800
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  // printSomething: function (someValue: number) {
  //   return someValue;
  // },
  // second option
  // printSomething: (someValue) => {
  //   console.log(deepWork.author);
  //   return someValue;
  //   // arrow function is gonna capture the global 'this' unlike the regular fucntion
  // },
  // third option
  // printSomething(someValue) {
  //   return someValue;
  // },
  printAuthor: () => {
    console.log(deepWork.author);
  },
};

// deepWork.isbn = 134;
deepWork.printAuthor();
const result = deepWork.printTitle(`is an awesome book`);
console.log(result);
// const result2 = deepWork.printSomething(34);
// console.log(result2);

// Another way of setting up methods in interfaces
// Example printSomething method above, utilizing arrow function syntax

// ## Challenge

// - Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// - Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// - Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// - Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// - Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// - Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
// - Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(ram: number): number;
}

const macbookPro: Computer = {
  id: 1,
  brand: "apple",
  ram: 8,
  upgradeRam(ram) {
    return (this.ram = ram);
  },
};

console.log(macbookPro.ram);

macbookPro.upgradeRam(32);

console.log(macbookPro.ram);

const razerBlade: Computer = {
  id: 2,
  brand: "razer",
  ram: 32,
  storage: 256,
  upgradeRam(ram) {
    return (this.ram = ram);
  },
};

console.log(razerBlade.ram);

razerBlade.upgradeRam(64);

console.log(razerBlade.ram);
