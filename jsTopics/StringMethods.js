//slice
// Define a string variable 
let A = 'Umar learning JS';

// Use the slice() method to extract a substring
let b = A.slice(0, 4);
let c = A.slice(5, 13);
let d = A.slice(14);

// Output the value of variable
console.log(b);
console.log(c);
console.log(d);

//substring
// Define a string variable
let str = "Mind, Power, Soul";

// Use the substring() method to extract a substring 
let part = str.substring(6, 11);

// Output the value of variable
console.log(part);

//replace
// Define a string variable 'str' 
let str = "Mind, Power, Soul";

// Use the replace() method to replace the substring
let part = str.replace("Power", "Space");

// Output the resulting string after replacement
console.log(part);

//charAt
let gfg = 'GeeksforGeeks';
let geeks = 'GfG is the best platform to learn and\n' +
    'experience Computer Science.';

// Print the string as it is
console.log(gfg);

console.log(geeks);

// As string index starts from zero
// It will return first character of string
console.log(gfg.charAt(0));

console.log(geeks.charAt(5));

//charCodeAt()
let gfg = 'GeeksforGeeks';
let geeks = 'GfG is the best platform\n\
to learn and experience\n\
Computer Science.';

// Return a number indicating Unicode
// value of character at index 0 ('G')
console.log(gfg.charCodeAt(0));
console.log(geeks.charCodeAt(5));