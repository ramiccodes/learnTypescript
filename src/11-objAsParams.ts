const createEmployee = ({
  id,
}: {
  id: number;
}): { id: number; isActive: boolean } => {
  return { id, isActive: id % 2 === 0 };
};

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent = {
  id: 5,
  name: "anna",
  email: "anna@gmail.com",
};

createStudent(newStudent);
createStudent({ id: 1, name: "bob", email: "bb@gmail.com" });

// There's a GOTCHA here
// When we add new key values to an object paramterer passed inline, TS complains as it should
// because the new key values were not specified upon type annotation of the function
// But for some reason, if you add the new key value to an object variable, TS doesn't complain

// In TS' mind, we have full control of passing inline parameter, however when just referencing the object,
// The only properties TS cares about is what is in the type annotation, they ignore anything else

// ## Challenge

// Your task is to create a function named processData that accepts two parameters:

// - The first parameter, input, should be a union type that can be either a string or a number.
// - The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

// The function should behave as follows:

// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number | void => {
  if (typeof input === "string" && config.reverse === true) {
    let reversed = input.split("").reverse().join("");
    return reversed.toUpperCase();
  }

  if (typeof input === "string") {
    return input.toUpperCase();
  }

  if (typeof input === "number") {
    return input ** 2;
  }
};

// const config = { reverse: false };
// console.log(config.reverse);

const stringExample = processData("hello");
console.log(stringExample);

const numberExample = processData(4);
console.log(numberExample);

const stringAndReversedExample = processData("hello", { reverse: true });
console.log(stringAndReversedExample);
