/* for in loop
The for...in loop iterates over all enumerable properties of an object, including those inherited from its prototype chain. It is commonly used for iterating over an object's keys. */

let student = {
    name: "umar",
    age: 20,
    cgpa: 4.5
}
for (let i in student) {
    console.log(i, student[i]);
}

for (let prop in ['a', 'b', 'c'])
    console.log(prop);            // 0, 1, 2 (array indexes)

for (let prop in 'str')
    console.log(prop);            // 0, 1, 2 (string indexes)

for (let prop in { a: 1, b: 2, c: 3 })
    console.log(prop);

/* for of loop
he for...of loop, on the other hand, is used for iterating over iterables like arrays, strings or maps.It returns the values of the object being iterated. */

let str = "apna college"
let size = 0;
for (let i of str) {
    console.log(i)
    size++;
}
console.log(size)

for (let val of ['a', 'b', 'c'])
    console.log(val);
