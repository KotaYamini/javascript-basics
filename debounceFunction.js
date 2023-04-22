/**
 * Debounce is one of the most asked question in JavaScript Interview as it helps interviewers to test your JavaScript skills as debounce function also implements 
 * other JavaScript concepts like scope, closures, higher order functions, async programming.
 */


const ele = document.querySelector("input");


function outcome(data) {
    console.log('data received from server', data);
}

//with debounce
function hofDebounce(func, timeout) { // using the concept of Higher Order Functions
    let timer; // using the concept of scope 
    return function (...args) {
        if (timer)
            clearTimeout(timer); // Here we are cancelling the unnecessary calls called cpu cycles & api calls before the defined timeout called 1000 seconds
        setTimeout(() => {
            func(args); // using the concept of closures
        }, timeout); // we are delaying the every keyup by using setTimeout (i.e, async programming)
    }
}


const result = hofDebounce(outcome, 1000);
console.log(result);

ele.addEventListener("keyup", e => result(e.target.value));