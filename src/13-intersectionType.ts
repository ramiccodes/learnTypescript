// Intersection type is a way to combine multiple types into one

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "how to cook a dragon",
  price: 13,
};

const book2: Book = {
  id: 2,
  name: "how to cook a fish",
  price: 20,
};

const discountedBook: DiscountedBook = {
  id: 3,
  name: "Wimpy Kid",
  price: 25,
  discount: 0.15,
};

// The type annotation above includes all of the Book type
// and also the {discount: number} type
// Syntax: Type & Type

// The difference between intersection type and union type is
// Union type is one type or the other (type | type) OR operator
// While intersection type combines all of the type (type & type) AND operator
