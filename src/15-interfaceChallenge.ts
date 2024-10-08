// ## Challenge - Part 1

// - Define the Person interface Start by defining a Person interface with a name property of type string.
// - Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// - Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// - Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// - Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

const getEmployee = (): Person | DogOwner | Manager => {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return {
      name: "john",
    };
  } else if (randomNumber > 0.66) {
    return {
      name: "sarah",
      dogName: "pucholo",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Managing people...");
      },
      delegateTasks() {
        console.log("Delegating tasks...");
      },
    };
  }
};

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();

console.log(employee);

// Type Guard
const isManager = (obj: Person | DogOwner | Manager): obj is Manager => {
  return "managePeople" in obj;
};

console.log(isManager(employee));

if (isManager(employee)) {
  employee.delegateTasks();
}

// Interface vs Type Alias

// A type alias is a way to give a name to a type. It can represent primitive types,
// union types, intersection types, tuples, and any other types. Once defined, the alias
// can be used anywhere in place of the actual type.

type PersonType = {
  name: string;
  age: number;
};

let john: PersonType = { name: "John", age: 30 };

// An interface is a way to define a contract for a certain structure of an object.

interface PersonInt {
  name: string;
  age: number;
}

let mary: PersonInt = { name: "Mary", age: 30 };

// Key Differences

// Type aliases can represent primitive types, union types, intersection types, tuples, etc.
// While interfaces are primarily used to represent the shape of an object

// You can merge (reopen) interfaces but not type alias

// Interfaces can be merged using declaration merging. If you define an interface with the same name more than once,
// Typescript will merge their definitions. Type aliases can't be merged in this way
