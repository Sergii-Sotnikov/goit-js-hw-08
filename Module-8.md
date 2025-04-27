# Цільовий елемент

- event.target — це посилання на вихідний елемент, на якому відбулася подія, у процесі спливання вона — незмінна.
- event.currentTarget — це посилання на поточний елемент, до якого прив’язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія.

# Припинення спливання

- event.stopPropagation(),
  Зупиняє "спливання" події в DOM-дереві. Це означає, що жоден батьківський елемент не зможе відловити цю подію.
  Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.
- event.stopImmediatePropagation(),
  Зупиняє "спливання" події так само, як event.stopPropagation().
  Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, навіть якщо вони були зареєстровані перед цим.

# nodeName Для перевірки типу елемента використовуємо властивість

event.target.Nodename

# пошук як querrySelecotr тільки знизу

e.target.closest('')

# Деструктуризація в циклах

for (const book of books) {
const { title, author, rating } = book;
console.log(title);
console.log(author);
console.log(rating);
}

for (const { title, author, rating } of books) {
console.log(title);
console.log(author);
console.log(rating);
}

# Деструктуризація параметрів

- деструктуризацією об'єкта в тілі функції:
  function printUserInfo(user) {
  const { name, age, hobby } = user
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
  }
  printUserInfo({
  name: "Alice",
  age: 25,
  hobby: "dancing"
  }); // Name: Alice, Age: 25, Hobby: dancing
- Із деструктуризацією об'єкта в місці оголошення параметрів:
  function printUserInfo({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
  }
  printUserInfo({
  name: "Alice",
  age: 25,
  hobby: "dancing"
  }); // Name: Alice, Age: 25, Hobby: dancing

# Патерн «Об'єкт параметрів»

function doStuffWithBook(book) {
// Робимо щось з властивостями об'єкта
console.log(book.title);
console.log(book.pages);
// І так далі
}

або

function doStuffWithBook(book) {
const { title, pages, downloads, rating, isPublic } = book;
console.log(title);
console.log(pages);
}

або

function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
console.log(title);
console.log(pages);
}

doStuffWithBook({
title: "The Last Kingdom",
pages: 736,
downloads: 10283,
rating: 8.38,
isPublic: true,
});

# Глибока деструктуризація

const user = {
name: "Jacques Gluke",
tag: "jgluke",
stats: {
followers: 5603,
views: 4827,
likes: 1308,
},
};

const {
name,
tag,
stats: { followers, views, likes },
} = user;

# Деструктуризація масивів

const color = [200, 255, 100];
const [ red, green, blue ] = color;
console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

# Часткова деструктуризація

const color = [200, 255, 100];
const [ red, ...otherColors ] = color;
console.log(red); // 200
console.log(otherColors); // [255, 100]

# Пропуск значень

const rgb = [200, 100, 255];
const [, , blue] = rgb;
console.log(`Blue: ${blue}`); // "Blue: 255"

# Деструктуризація параметрів

function printFruits([firstFruit, secondFruit, thirdFruit]) {
console.log(firstFruit, secondFruit, thirdFruit);
}
printFruits(["apple", "banana", "orange"]); // "apple banana orange"
