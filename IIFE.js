/**
 * An IIFE(Immediately Invoked Function Expression) is a javascript function that runs as soon as it is defined.
 * 
 * It is a design pattern which is also known as Self-Executing Anonymous function.
 * 
 * Syntax:
 * ---------
 * (function() {
 * 
 * //statements
 * 
 * })();
 */


const result = (function counter() {
    let count = 0;

    function calculate() {
        return count += 1;
    }

    return calculate;
})();

console.log(result()); // 1
console.log(result()); // 2
console.log(result()); // 3
console.log(result()); // 4
console.log(result()); // 5