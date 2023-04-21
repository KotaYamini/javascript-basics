/**
 * What is Lexical Scope?
 * A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. 
 * But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
 * 
 * What is Closures?
 * In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.
 * The closure preserves the outer scope inside its inner scope even after outer function is returned.
 */

let b = 5;

function unitTest() {
    let b = 6;
    console.log(b); // Here it will print the b value as 6
}

console.log(unitTest);


/**
 * In javascript, a closure is a function that references varaibles in the outer scope from its inner scope.
 * 
 * The closure preserves the outer scope inside its inner scope even after outer function is returned.
 */

let a = 10; // parent scope called 'window' object

function test() {
    console.log(a); //here in this case 'a' is referring to parent scope
}

test();


//
let count = 0;
function counter() {
    console.log(count += 1);
}

count = 20; // Here I have reintialized count with 20 and then it started count from 20
counter(); //21
counter(); //22
counter(); //23


function callCounter() {
    let count = 0;

    function calculate() {
        return count += 1;
    }

    return calculate;
}

let result = callCounter();

console.log(result());
console.log(result());
console.log(result());

