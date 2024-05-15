if else
    if (condition == true) {
        //execute code
    }
    else {
        //execute code
    }

var food = "hot";
if (food == "hot") {
    console.log('too hot')
}
else if (food == "cold") {
    console.log('too cold')
}
else {
    console.log('just right')
}

if (light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

// switch
var food = "hot";
switch (food) {
    case 'hot':
        console.log('too hot');
        break;

    case 'cold':
        console.log('too cold');
        break;

        defualt:
        console.log('too hot');
}

switch (light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
}

