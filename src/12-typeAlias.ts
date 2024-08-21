// Type Alias
//  - A name or a shorthand for an existing type
//  It's easier to reuse a type with type alias

// To create a type alias, you must use the 'type' keyword follow by a
// name with a capitalized first letter follow by the type annotations
// It's also possible to export a type alias by adding the keyword 'export'
// at the start

export type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// We're not limited to using type alias for objects only

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 123;

// Type alias for a union type literal types
type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

// ## Challenge

// - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.

// - Create the printStaffDetails function: This function should accept
// a parameter of type Staff. Inside the function, use a type guard to
// check if the 'employees' property exists in the passed object. If it
// does, print a message indicating that the person is a manager and the
//  number of employees they manage. If it doesn't, print a message
// indicating that the person is an employee and the department they
// belong to.

// - Create Employee and Manager objects: Create two Employee objects.
// One named alice and second named steve. Also create a Manager object
// named bob who manages alice and steve.

// - Test the function: Call the printStaffDetails function with alice
// and bob as arguments and verify the output.

type Employee = { id: number; name: string; department: string };

type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const printStaffDetails = (s: Staff): void => {
  if (s.employees) {
    console.log(
      `This staff member is a manager. They manage ${s.employees.length} employees`
    );
  } else {
    console.log(
      `This staff member is an employee and they belong in the ${s.department} department`
    );
  }
};

const alice: Employee = {
  id: 1,
  name: "alice",
  department: "sales",
};

const steve: Employee = {
  id: 2,
  name: "steve",
  department: "sales",
};

const jason: Employee = {
  id: 4,
  name: "jason",
  department: "sales",
};

const bob: Manager = {
  id: 3,
  name: "bob",
  employees: [steve, alice, jason],
};

printStaffDetails(alice);
printStaffDetails(bob);

// Type alias also support computed properties
const propName = "age";

let tiger = { [propName]: 5 };

// propName = age
// so, {"age": 5}
// If we change the value of propName, it would update the type

type Animal = {
  [propName]: number;
};
