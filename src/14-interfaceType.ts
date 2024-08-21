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
