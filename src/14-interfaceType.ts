//  Interface type allows us to set up shape for objects (only objects)

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
  // price: 800
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

// deepWork.isbn = 134;
deepWork.printAuthor();
const result = deepWork.printTitle(`is an awesome book`);
console.log(result);
