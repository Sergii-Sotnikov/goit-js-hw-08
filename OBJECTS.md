✅

<!-- Цикл for...in -->

for (key in object) {
// інструкції
}

const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
rating: 8.38,
};

for (const key in book) {
console.log(key); // Ключ
console.log(book[key]); // Значення властивості з таким ключем
}

✅

<!-- Метод Object.keys() -->

const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.

const book = {
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
console.log(key); // Ключ
console.log(book[key]); // Значення властивості
}

✅

<!-- Метод Object.values() -->

const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
rating: 8.38,
};
const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

✅

<!-- Масив об’єктів -->

const books = [
{
title: "The Last Kingdom",
author: "Bernard Cornwell",
rating: 8.38,
},
{
title: "Beside Still Waters",
author: "Robert Sheckley",
rating: 8.51,
},
{
title: "The Dream of a Ridiculous Man",
author: "Fyodor Dostoevsky",
rating: 7.75,
}
];
for (const book of books) {
console.log(book); // Об'єкт книги
console.log(book.title); // Назва
console.log(book.author); // Автор
console.log(book.rating); // Рейтинг
}

✅

<!-- Пошук об'єкта за значенням властивості -->

const books = [
{ title: "The Last Kingdom", author: "Bernard Cornwell" },
{ title: "Beside Still Waters", author: "Robert Sheckley" },
{ title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
if(book.author === authorToSearchFor) {
console.log(book);
console.log(book.title)
console.log(book.rating)
}
}

✅

<!-- Колекція значень властивості -->

const books = [
{ title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
{ title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
{ title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
];

const titles = [];

for (const book of books) {
titles.push(book.title)
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

✅

<!-- Методи об'єкта -->

Логічно й синтаксично згруповані сутності
const bookShelf = {
books: ["The Last Kingdom", "Dream Guardian"],
// Це метод об'єкта
getBooks() {
return "Returning all books";
},
// Це метод об'єкта
addBook(bookName) {
return `Adding book ${bookName}`;
},
};

// Виклики методів
bookShelf.getBooks(); // поверне "Returning all books"
bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"

✅

<!-- Доступ до властивостей об'єкта -->

const bookShelf = {
books: ["The Last Kingdom", "The Mist"],
getBooks() {
return this.books;
}
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

✅

<!-- Зміна за посиланням -->

const bookShelf = {
books: ["The Last Kingdom"],
getBooks() {
return this.books;
},
addBook(bookName) {
this.books.push(bookName);
}
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

✅

<!-- Масив об’єктів -->

const bookShelf = {
books: [
{ title: "The Last Kingdom", rating: 8 },
{ title: "The Mist", rating: 6 },
],
getAvarageRating() {
let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;

},
};

bookShelf.getAvarageRating(); // 7

✅

<!-- Зміна об'єкта в масиві -->

const bookShelf = {
books: [
{ title: "The Last Kingdom", rating: 8 },
{ title: "The Mist", rating: 6 },
],
changeRating(bookName, newRating) {
for(const book of this.books) {
if(book.title === bookName) {
book.rating = newRating;
}
}
}
};

changeRating("The Mist", 9);
changeRating("The Last Kingdom", 4);

✅Синтаксис spread і rest✅
✅

<!-- Залишкові параметри -->

function multiply(...args) {
console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]

✅

<!-- Збір частини аргументів -->

function multiply(first, second, ...args) {
console.log(first, second, args);
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2 [3]
multiply(1, 2, 3, 4); // 1 2 [3, 4]

✅

<!-- Входження параметрів -->

...spread

const temps = [14, -4, 25, 8, 11];

console.log(...temps); // 14 -4 25 8 11 набір окремих чисел

// Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

ДОДАТИ метод splice
ДОДАТИ метод Array.isArray()
