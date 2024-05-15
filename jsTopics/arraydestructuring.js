https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/
https://www.programiz.com/javascript/destructuring-assignment
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// rest destructuring assignment  
var [a, b, ...args] = colors;
console.log(a);
console.log(b);
console.log(args);

//Parsing returned array from functions

function array() {
    return [100, 200, 300];
}

var [x, y, z] = array();

console.log(x); // 100  
console.log(y); // 200  
console.log(z); // 300
//Using Default Values

let [greeting, , , name] = ["Hello", "I", "am", "Sarah"];

let [greeting = "hi", name = "Sarah"] = ["hello"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"
let a = 3;
let b = 6;

[a, b] = [b, a];

console.log(a);//6
console.log(b);//3

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'
}

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female