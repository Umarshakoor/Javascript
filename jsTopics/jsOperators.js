Additional operators

The equality operator: 5 == '5' true This means that the equality operator compares only the values, but not the types.
The strict equality operator: 5 === "5" false The strict equality operator compares for both the values and the data types.
The inequality operator: 5 != "5" false The inequality operator checks if two values are not the same, but it does not check against the difference in types.
The strict inequality operator: 5 !== '5' returns false because it is false to say that the number 5 is not of the same value and data type and another number 5. compared values have to have the same value and the same data type.

The addition assignment operator: +=;
The concatenation assignment operator: +=;
concatenation operator
"inter" + "net" // "internet"
"note" + "book" // "notebook"
365 + " days" // "365 days"
12 + " months" // "12 months"

The addition assignment operator, +=
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

The concatenation assignment operator, +=
var longString = "";
longString += "Once";
longString += " upon";
longString += " a
longString += " time"";;
longString += "...";
console.log(longString); // "Once upon a time..."

Using the logical && operator
var score = 8;
console.log("mid best player", score > 5 && score < 10);

Using the logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);