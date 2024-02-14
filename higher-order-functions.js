/**
 * A function that takes another function as an argument or a function that gives another function as an output is called Higher Order Functions.
 */


function x(fn) {
    fn();
}

function y() {
    console.log("Hello from World!");
}

x(y);

/**
 * x is called higher Order function
 * y is called callback function
 */

const data = [10, 23, 89, 53, 76, 89];

const calculateSquare = (arr) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(Math.pow(arr[i], 2));
    }
    return output;
}


const multiplyBy7 = (arr) => {
    const output = [];
    for (let j = 0; j < arr.length; j++) {
        output.push(arr[j] * 7);
    }
    return output;
}


console.log(calculateSquare(data)); // [ 100, 529, 7921, 2809, 5776, 7921 ]
console.log(multiplyBy7(data)); // [ 70, 161, 623, 371, 532, 623 ]


// Using Higher Order Functions

const calSubtract = (arrEle) => arrEle - 10;

const calculateSubtraction = (arr, calcFn) => {
    const output = [];
    for (var i = 0; i < arr.length; i++) {
        output.push(calcFn(arr[i]))
    }
    return output;
}

console.log(calculateSubtraction(data, calSubtract)); //[ 0, 13, 79, 43, 66, 79 ]
console.log(data.map(calSubtract)); //[ 0, 13, 79, 43, 66, 79 ]


// Prototype is a global constructor which allows you to add new properties and method to the array.

const calcRem = (ele) => ele % 10;

Array.prototype.calculateRemainder = function (calcRem) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(calcRem(this[i]));
    }
    return output;
}

console.log(data.calculateRemainder(calcRem)); //[ 0, 3, 9, 3, 6, 9 ]
console.log(data.map(calSubtract));  // Here Map acts as a higher order function