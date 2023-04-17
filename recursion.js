/**
 * Recursion is defined as the process of a function calling itself. A recursive function is the function that corresponds to this. 
 * The base case (or halting condition) and the recursive call to itself are commonly two elements of a recursive function. 
 * The base case is when the function should no longer'recurse.'
 * A recursive call is when a function calls itself, usually with slightly modified arguments that 'work down' to the base case.
 */


// function test() {
//     test();
// }

// test();
/**Here test() will call for infinite times as there is no break condition inside the function test. */

/**Base Case: The base case is what stops the recursion from continuing on forever.It act like a terminating condition. */

// General Countdown function
function countdown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

countdown(3); /**
3
2
1
 */

// recursion function for countdown. Note: We have to write the exit condition first and then the inner function call.

function recursivecountDown(n) {
    if (n == 0) // exit condition
        return;

    console.log(n);
    recursivecountDown(n - 1); // function call within function
}

recursivecountDown(3);


function calculateTotal(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(calculateTotal(4)); //10


function calculateRecursiveTotal(n, total = 0) {
    if (n === 0)
        return total;

    return calculateRecursiveTotal(n - 1, total += n);
}

console.log(calculateRecursiveTotal(4)); //10