/* Mapping is a fundamental operation in JavaScript that transforms each element of an array based on a provided function, creating a new array with the transformed values.It's a concise and expressive way to modify array elements without modifying the original array. */
//array.map(function(currentValue, index, arr), thisValue)

// The map() method is a higher-order function in JavaScript that creates a new array by performing a specified operation on each element of an existing array. The map() method takes a callback function as an argument, which is executed on each element of the array. It returns a new array with the results of the callback function.

// double each array number
const arry = [1, 2, 3, 4, 5];
const double = arry.map((num) => num * 2);
console.log(double);

// uppercasing strings
const words = ["cat", "dog", "rabbit", "bird"];
const upperCased = words.map((word) => word.toUpperCase());
console.log(upperCased);

// extracting object properties
const users = [
    { name: "John", age: 34 },
    { name: "John", age: 20 },
    { name: "camperCat", age: 10 },
];
const names = users.map((user) => user.name);
console.log(names);

// calculating square root

const num = [9, 25, 49, 36]
const sqroot = num.map((numb) => Math.sqrt(numb))
console.log(sqroot)

//converting temperature
const tempInCelsius = [25, 15, 30, 50];
const tempInfahrenheit = tempInCelsius.map((convert) => {
    return (convert * 9 / 5) + 32;
})
console.log(tempInfahrenheit)

// sequare of even numbers
const orgNumb = [1, 2, 3, 4, 5];
const sqNumb = orgNumb.map((cur) => (cur % 2 == 0) ? cur * cur : cur);
console.log(sqNumb)


