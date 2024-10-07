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
    return (this.ram += ram);
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

// Interface merging
// Most likely you're not going to do it on the same, only if you are getting the interface from somewhere

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

// age property doesn't currently exist on Person interface
const person: Person = {
  name: "john",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};
console.log(person.getDetails());

// Extending an interface

// "extends" keyword helps extend that interface to include all the properties and methods from a different specified interface
// any additional properties and methods added to this will be included in the new interface
// Example: Since the "Employee" interface extends "Person", the "Employee" interface will now include:
//  interface Employee {
//    name: string;
//    age: number;
//    getDetails(): string;
//    employeeId: number;
// }
interface Employee extends Person {
  employeeId: number;
}
// Jane, an employee is also classified as a person, so she should be able to access properties and methods from the
// Person interface but also having extra as an employee
const employee: Employee = {
  name: "jane",
  age: 27,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

// Manager Bob is a Person and a DogOwner
const manager: Manager = {
  name: "bob",
  age: 35,
  dogName: "pucholo",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}`;
  },
  managePeople() {
    console.log(`Managing people...`);
  },
};

manager.managePeople();
console.log(manager.getDetails());
console.log(manager.getDogDetails());
