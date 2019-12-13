import { Category } from './enums';
import {
    createCustomer,
    createCustomerID,
    getAllBooks,
    getBookAuthorByIndex,
    getBookByID,
    getBookProps,
    getBookTitlesByCategory,
    getTitles,
    logBookTitles,
    logDamage,
    logFirstAvailable,
    printBook,
    сheckoutBooks
} from './functions';
import { Author, Book, Librarian } from './interfaces';
import { UniversityLibrarian } from './classes';
import { PersonBook } from './types';
import { RefBook } from './classes';

const log = (text: string) => console.log(`%c ${text}`, 'color: #bada55; margin-left: 50px');

// Task 01.01
log('01.01');

logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JAVASCRIPT));
console.log(getBookAuthorByIndex(3));
// console.log(calcTotalPages());

// 03.01
log('Task 03.01');


console.log(getBookByID(1));

// 03.02
log('Task 03.02');

const myID = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number): string => `${name}${id}`;
idGenerator = createCustomerID;
const anotherID = idGenerator('Bob', 43);
console.log(anotherID);

// 03.03
log('Task 03.03');


createCustomer('Mike');
createCustomer('Mike', 23);
createCustomer('Mike', 23, 'Munich');

getBookTitlesByCategory();
logFirstAvailable();


const myBooks = сheckoutBooks('Somnus', 1, 2, 4);
console.log(myBooks);

// 03.04
log('Task 03.04');


const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);

// 03.05
log('Task 03.05');

// function assertStringValue(value: any): asserts value is string {
//   if (typeof value !== 'string') {
//     throw new TypeError(`Value should be a string type, instead got: ${value} type ${typeof value}`);
//   }
// }

// 04.01
log('Task 04.01');


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

// 04.02
log('Task 04.02');

logDamage('45hp');

// 04.03
log('Task 04.03');

const favoriteAuthor: Author = {
    email: 'author@gmail.com',
    name: 'Ben Franklin',
    numBooksPublished: 37
};

// const favoriteLibrarian: Librarian = {
//     name: 'Jerry',
//     email: 'jerry@library.uk',
//     department: 'London',
//     assistCustomer: customerName => console.log(`Assisting customer ${customerName}`),
// };

// 04.04
log('Task 04.04');

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
console.log(offer?.magazine);

// 04.05
log('Task 04.05');

console.log(getBookProps(getAllBooks()[1], 'title'));
console.log(getBookProps(getAllBooks()[1], 'markDamaged'));
// console.log(getBookProps(getAllBooks()[1], 'isbn'));

// 05.01
log('Task 05.01');


// const ref = new ReferenceItem('Some TITLE', 1977);
// ref.printItem();
// ref.publisher = 'Hollahold';
// console.log(ref.publisher);

// 05.02
log('Task 05.02');
const refBook = new RefBook('Big Medical Encyclopedia', 1963, 'PJSC Prosvita');
refBook.printItem();

// 05.03
log('Task 05.03');

refBook.printCitation();

// 05.04
log('Task 05.04');

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Librarian name';
favoriteLibrarian.assistCustomer('Customer Bobby');

// 05.05
log('Task 05.05');

const personBook: PersonBook = {
    name: 'John',
    email: 'john_galt@gmail.com',
    id: 1,
    title: 'Who is John Galt?',
    author: 'John Galt',
    category: Category.HTML,
    available: true,
};
console.log(personBook);

// 06.05
log('Task 06.05');

import('./classes')
    .then(({ Reader }) => {
        const reader = new Reader;
        reader.name = 'Hanna';
        reader.take(getAllBooks()[3]);
        console.log(reader);
    });
