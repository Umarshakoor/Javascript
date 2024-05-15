const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

let name = "Nipuni Arunodi";

// Spread out string into an array

let nameChar = [...name];
console.log(nameChar);
// ["N","i","p","u","n","i"," ","A","r","u","n","o","d","i"]

let name = "Nipuni Arunodi";

// String to array of chracters

let nameChars = Array.from(name);
console.log(nameChar);
// ["N","i","p","u","n","i"," ","A","r","u","n","o","d","i"]

const text = "Hi, My name is Nipuni"

console.log(text.includes("Nipuni"));
// true

console.log(text.includes("Arunodi"));
// false

const text = "Hi, My name is Nipuni"

console.log(text.startsWith("Hi")); // true

const text = "Hi, My name is Nipuni"

console.log(text.endsWith("Hi")); // false

const word = "Nipuni";
const reversedWord = [...word].reverse().join("");

console.log(reversedWord); // "inupiN"

function Person(name, age) {

    this.name = name;

    this.age = age;

}

let person = new Person('John', 30);

let num1 = ["two", "three"];
let num2 = ["one", ...num1, "four", "five"];

console.log(num2);
// [ 'one', 'two', 'three', 'four', 'five' ]

//rest
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
const result = console.log(sum(1, 2, 3, 4));
// This returns 10 (1 + 2 + 3 + 4)