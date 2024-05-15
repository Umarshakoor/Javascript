/* forEach loop is a method available on arrays in JavaScript.It provides a simpler and more concise syntax for iterating over array elements.It takes a callback function as an argument and automatically handles the iteration for you It doesn’t create a new array and doesn’t return anything*/
//array.forEach(function (currentValue, index, arr))

const numbers = [1, 2, 3, 4];

numbers.forEach((number) => {
    console.log(number * 2);
});

chars = ['Hello', 'world!!!'];

var retVal = chars.forEach(function (word) {
    console.log("Saving to db: " + word)
})

console.log(retVal) //undefined

const abc = ['a', 'b', 'c'].forEach(
    val => console.log(val)     // a, b, c (array values)
);

['a', 'b', 'c'].forEach(
    (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
);

//find the lenght of each string in an array
const fruits = ['apple', 'orange', 'banana'];

const lenght = []

/* fruits.forEach((len) => console.log(len.length)); */
fruits.forEach((len) => lenght.push(len.length));
console.log(lenght)

//skip megative numbers

const num = [5, -5, 3, -9]
num.forEach((pos) => {
    if (pos > 0) {
        console.log(pos)
    }
})

// change grade property value using forEach
const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];
students.forEach((stud) => stud.grade = 'A+');
console.log(students)

//increment all elements in an arry by 1
const numb = [5, 11, 17]
numb.forEach((element, index, arr) => arr[index] = element + 1)
console.log(numb)

// calculate sequare of each element using forEach
/* function sq(num) {
    const squared = num * num;
    console.log(squared)
}
const nums = [2, 3, 4]
nums.forEach(sq) */

const nums = [5, 6, 7]
nums.forEach((sq) => { console.log(sq * sq) })

/* Show the names of people whose salaries are greater than or equal to 4000 from the array of staff details */

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

staffsDetails.forEach(({ name, salary }) => {
    if (salary >= 4000) {
        console.log(name);
    }
});

// Reverse each string in an array
const words = ["apple", "banana", "cherry"];

words.forEach(word => {
    const reversed = word.split("").reverse().join("");
    console.log(reversed);
});

