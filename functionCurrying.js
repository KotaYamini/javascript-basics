/**
 * Function Currying is one of the most asked Interview Question. 
 * Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. 
 * It returns a new function that expects the next argument inline.
 * In other words, when a function instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
 * Concept of closures is also come into picture as closures remember the  outer scope varaible even though the outer function is returned.
 */


function sum(x) {
    return function (y) {
        return x + y;
    }
}


console.log(sum(11)(22));


// Using Fat Arrow Functions
const multiply = x => y => z => x * y * z;
console.log(multiply(1)(2)(3));


function subtraction(a) {
    return (b, c) => {
        return a * b * c
    }
}


console.log(subtraction(10)(11, 22)); // This is not an example of function currying as the function will take single argument at a time & and its a example of "Partial Applied function"


let users = {
    firstName: 'Yamini',
    lastName: 'Kota'
}


function getUserDetail(data, key) {
    return data[key];
}

console.log(getUserDetail(users, 'lastName'));

