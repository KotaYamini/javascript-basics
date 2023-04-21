/**
 * What are Pure Functions? 
 * Function that produces the same output for the same input. It means it returns the same result when you pass the same arguments. A pure function shouldn't have any side effects to change the expected output

We need to make sure functions are,

Predictable: It produces a predictable output for the same inputs.
Readable: Anyone reading the function as a standalone unit can understand its purpose completely.
Reusable: Can reuse the function at multiple places of the source code without altering its and the caller's behavior.
Testable: We can test it as an independent unit.

What is SideEffect ?
Any operation that is not directly related to the final output of the function is called a Side Effect

A few more classic cases of the side effects are,

1)Mutating(changing) the input itself.
2) Querying/Updating DOM
3 )Logging(even in the console)
4) Making an XHR/fetch call.

 */

let message = "Good Morning";

const greeting = (name) => {
    return `${message} ${name}`;
}


console.log(greeting('Yamini'));


message = "Good Evening";
console.log(greeting('Kota')); // Here message varaible will change as it have to access the variable from outside of the function  & this is called 'SideEffect'

// Note: In a pure function the inner function should not be dependable on outer variable & cannot manipulate the DOM.
//Eg: A web server like http call is also a impure function as it is dependent on ouside of the client.


let x = 10;
function impure(y) {
    return x + y; //Here it grabs the variable from outside the function
}

console.log(impure(20));

