/**
 * Flatten Array of Array is one of the most asked Interview Question and this is very important to understand to solve many complex problems in programming. 
It will cover all about how to Flatten your array of array and how Recursion will help you to solve this use case.
Watch the complete video till the end to understand it completely.


What is Recursion?
Recursion is defined as the process of a function calling itself. A recursive function is the function that corresponds to this. 
The base case (or halting condition) and the recursive call to itself are commonly two elements of a recursive function. 
The base case is when the function should no longer recurse.' 
A recursive call is when a function calls itself, usually with slightly modified arguments that 'work down' to the base case.
 */

let arr = [1, 2, [3, 4, 5], 6, 7, [8, 9, [10, 11, 12], 13]];
let output = [];

function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i]);
        } else {
            output.push(arr[i]);
        }
    }
    return output;
}



console.log(flatten(arr));

