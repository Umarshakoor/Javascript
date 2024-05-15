let array = ["one", "two", "three"];
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i]) //display the array item where the index is euqal to i
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i * 100, "tomato!")
        } else {
            console.log(i * 100, arr[i])
        }
    }
}

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test", "t")

function letterFinder(word, match) {
    var condition1 = typeof (word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof (match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if (condition1 && condition2) { //if both condition matches
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([], [])
letterFinder("cat", "c")