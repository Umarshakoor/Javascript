function printEventNumbers() {
    for (let i = 0; i <= 10; i += 2) {
        console.log(i);
    }
}
printEventNumbers();

let i;
let a = 100;
let j = 10;
console.log("All even numbers")
for (i = 1; i <= j; i++) {
    if (i % 2 === 0)
        /* if (j % 2 != 0) */ {
        console.log(i);
    }
}

// using loops
// Initializing numbers array
let numbers = [10, 23, 12, 21];

// Declaring empty Even array
let even = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
        even.push(numbers[i]);
}
// Printing output
console.log(`Even numbers in an array are: ${even}`);

