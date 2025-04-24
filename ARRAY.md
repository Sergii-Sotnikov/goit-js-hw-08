Щоб отримати доступ до значення елемента масиву, ми використовуємо синтаксис квадратних дужок:
arrayName[index]
const planets = ['Earth', 'Mars', 'Venus'];
planets[0]; // 'Earth'
planets[1]; // 'Mars'
planets[2]; // 'Venus'
planets[999]; // undefined

===================================================================================
Перевизначення значення елемента
const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

===================================================================================
Довжина масиву
const planets = ['Earth', 'Mars', 'Venus'];
planets.length; // 3

===================================================================================
Індекс останнього елемента
const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"

===================================================================================
Приведення типів: масиви

1. Масив → Рядок
   const array = [1, true, "Poly"];
   console.log(String(array));// "1,true,Poly"
   console.log(array + "5"); // "1,true,Poly5"

2. Масив → Число

- спочатку масив приводиться до рядка,
- а потім цей рядок приводиться до числового значення;
  console.log(Number([])); // 0
  console.log(Number([1])); // 1
  console.log(Number([1, 2, 3])); // NaN

3. Масив → Логічне значення (буль)
   const emptyArray = [];
   const nonEmptyArray = [1, 2, 3];
   console.log(Boolean(emptyArray)); // true
   console.log(Boolean(nonEmptyArray)); // true

===================================================================================
Метод join()
const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

===================================================================================
Метод split()
const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

===================================================================================
Метод slice()
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]

Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

===================================================================================
Метод concat()
const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

===================================================================================
Метод indexOf()
const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

===================================================================================
Метод push()
const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']
planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

- цикл + метод push()
  const tags = [];
  for(let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
  }
  console.log(tags); // ["tag-0", "tag-1", "tag-2"]

===================================================================================
Метод includes()
const planets = ["Earth", "Mars", "Venus"];
console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false

===================================================================================
Цикл for...of
const planets = ["Earth", "Mars", "Venus"];
for (const planet of planets) {
console.log(planet);// Earth, Mars, Venus <== не массив!
}

===================================================================================
Псевдомасив arguments
function sum(a, b) {
console.log(arguments);
return a + b;
}
sum(2, 5);

function foo() {
// У змінній args буде повноцінний масив з усіх аргументів
const args = Array.from(arguments);
return args.join("-");
}
foo(1, 2, 3); // Поверне "1-2-3"

===================================================================================
Параметри за замовчуванням
function greet(username = "Guest") {
console.log(`Hello, ${username}!`);
}
greet("Jacob"); // "Hello, Jacob!"
greet(); // "Hello, Guest!"

===================================================================================
Функціональний вираз
