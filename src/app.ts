const log = (text: string, section: boolean = false) => console.log(`%c ${text}`, `color: #bada55; margin-left: ${section ? '20' : '50'}px`);

// Module 1
log('Module 1', true);

interface Book {
  title: string;
  author: string;
  available: boolean;
  id: number;
  category: Category;
  pages?: number;
  markDamaged?(reason: string): void;
}

enum Category {
  JAVASCRIPT = 'JavaScript',
  CSS = 'CSS',
  HTML = 'HTML',
  ANGULAR = 'Angular',
}

function getAllBooks(): readonly Book[] {
  const list: readonly Book[] = [
    {
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JAVASCRIPT, id: 1,
    },
    {
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JAVASCRIPT,
      id: 2,
    },
    {
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS,
      id: 3,
    },
    {
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.ANGULAR,
      id: 4,
    }
  ] as const;

  return list;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()) {
  console.log(`Total books: ${books.length}`);

  const firstAvailable = books.find(book => book.available);
  console.log(`First available: ${firstAvailable.title}`);
}

function getBookTitlesByCategory(category: Category = Category.JAVASCRIPT): Array<string> {
  const books = getAllBooks();

  return books.filter(book => book.category === category).map(book => book.title);
}

function logBookTitles(bookTitles: string[]): void {
  console.log(bookTitles);
}

function getBookAuthorByIndex(bookIndex: number): [string, string] {
  const books = getAllBooks();
  const { title, author } = books[bookIndex];

  return [title, author];
}

function calcTotalPages(): bigint {
  const libraries = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
  ] as const;

  return libraries.reduce((acc, lib) => {
    const libPages = BigInt(lib.books) * BigInt(lib.avgPagesPerBook);

    return acc + libPages;
  }, 0n);
}

logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JAVASCRIPT));
console.log(getBookAuthorByIndex(3));
console.log(calcTotalPages());

// Module 2
log('Module 2', true);
// 03.01
log('Task 03.01');

const displayTitles = (books: readonly Book[]) => {
  books.forEach(book => console.log(book.title));
};
displayTitles(getAllBooks());

const getBookByID = (id: number) => {
  const books = getAllBooks();

  return books.find(book => book.id === id);
};
console.log(getBookByID(1));

// 03.02
log('Task 03.02');

const createCustomerID = (name: string, id: number): string => `${name}${id}`;
const myID = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number): string => `${name}${id}`;
idGenerator = createCustomerID;
const anotherID = idGenerator('Bob', 43);
console.log(anotherID);

// 03.03
log('Task 03.03');

const createCustomer = (name: string, age?: number, city?: string) => {
  console.log(`Customer name: ${name}`);

  if (age) {
    console.log(`Customer age: ${age}`);
  }
  if (city) {
    console.log(`Customer city: ${city}`);
  }
};
createCustomer('Mike');
createCustomer('Mike', 23);
createCustomer('Mike', 23, 'Munich');

getBookTitlesByCategory();
logFirstAvailable();

const сheckoutBooks = (customer: string, ...bookIDs: number[]): string[] => {
  console.log(`Checking books for ${customer}`);

  return bookIDs.reduce((acc, bookID) => {
    const book = getBookByID(bookID);

    return book.available ? [...acc, book.title] : acc;
  }, []);
};
const myBooks = сheckoutBooks('Somnus', 1, 2, 4);
console.log(myBooks);

// 03.04
log('Task 03.04');

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]) {
  const books = getAllBooks();

  if (!args.length) {
    return [];
  }
  if (args.length === 1) {
    const arg = args[0];

    if (typeof arg === 'string') {
      return books.filter(book => book.author === arg).map(book => book.title);
    }
    if (typeof arg === 'boolean') {
      return books.filter(book => book.available === arg).map(book => book.title);
    }
  }
  if (args.length === 2) {
    const [id, available] = args;

    if (typeof id === 'number' && typeof available === 'boolean') {
      return books.filter(book => book.id === id && book.available === available).map(book => book.title);
    }
  }
}
const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

// 03.05
log('Task 03.05');

// function assertStringValue(value: any): asserts value is string {
//   if (typeof value !== 'string') {
//     throw new TypeError(`Value should be a string type, instead got: ${value} type ${typeof value}`);
//   }
// }

// Module 3
log('Module 3', true);
// 04.01
log('Task 04.01');

const printBook = (book: Book) => console.log(`${book.title} by ${book.author}`);

const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: reason => console.log(`Damaged: ${reason}`),
};

printBook(myBook);
myBook.markDamaged('missing back cover');
