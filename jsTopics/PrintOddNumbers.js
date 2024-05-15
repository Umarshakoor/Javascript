function oddNum(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
oddNum(7);

//2nd solution:
function oddNumberCheck(input) {
    for (let i = 1; i <= input; i += 2) {
        console.log(i);
    }
}

oddNumberCheck(7);