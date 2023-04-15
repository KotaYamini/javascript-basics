/**
 * The Rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
 * function(arg1, arg2, ...rest);
 */

function sum(...values) {
    let sum = 0;
    values.map(d => sum += d);
    console.log('Sum', sum);

}

sum(2, 3);
sum(7, 4, 3, 8, 9);
sum(67, 43, 78, 90);

/**
 * Difference between SpreadOperator & RestParameter
 * Spread Operator is used to unpack the values from array where as Rest parameter is used to accept an indefinite arguments as an array
 */


function multiply() {
    console.log(Array.isArray())
    console.log(arguments); // It returns the array like syntax  { '0': 3, '1': 4, '2': 5, '3': 6, '4': 7 }
    let multiply = 1;
    //    arguments.map(d => multiply *= d); //will throw the `TypeError: arguments.map is not a function`
}

multiply(3, 4, 5, 6, 7);


/**
 * Difference between arguments  and restparameter is that restparameter can hold a varible  and then other arguments as well where as arguments can't do that as it takes all the values at a time.
 */

function calculate(type, ...values) {
    type(...values)
}

calculate(sum, 89, 34, 67, 89);
calculate(subtract, 40, 67, 90);

function subtract(...values) {
    // logic here
    let subtract = 1;
    values.map(d => subtract -= 10);
    console.log('subtract', subtract);
}

console.log(subtract(3, 56, 87, 90));