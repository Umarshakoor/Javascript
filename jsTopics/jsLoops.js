for loops
for (var i = 1; i <= 3; i++) {
        console.log(i)
    }
console.log('Go')

for (var i = 10; i > 0; i--) {
    console.log(i)
}
console.log('Happy new year')

//while loop

var counter = 3
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
//nested

for (i = 0; i < 4; i++) {
    for (j = 1; j <= 7; j++) {
        console.log("week " + i + "day " + j)
    }
}
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}
var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) {
    console.log(cubes[i])