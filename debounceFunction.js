/**
 * Debounce is one of the most asked question in JavaScript Interview as it helps interviewers to test your JavaScript skills as debounce function also implements 
 * other JavaScript concepts like scope, closures, higher order functions, async programming.
 */


const ele = document.querySelector("input");


function outcome() {
    console.log('data received from server');
}

//with debounce
function hofDebounce(func, timeout) {
    let timer;
    return function () {
        if (timer)
            clearTimeout(timer); // Here we are cancelling the unnecessary calls before the defined timeout called 1000 seconds
        setTimeout(() => {
            func();
        }, timeout);
    }
}


const result = hofDebounce(outcome, 1000);
console.log(result);

ele.addEventListener('keyup', result);