/**
 * A callback function is a function passed into another function  as an argument, 
 * which is then invoked inside the outer function to complete some task.
 * 
 * syntax: function1(function2)
 * Here function2 is called callback function
 * 
 * Examples:
 * EventListeners: const btn = btn.addEventListener('click', () => { //some logic })
 * map : const data = [1,2,3,4]; data.map(r =>r * 2);
 * filter: data.filter((data) => data %2 ==0 );
 * reduce: data.reduce((acc,value) => acc+value,0);
 * setTimeout(()=>{//some logic},1000);
 */


/** A function that accepts an another function as an argument is called Higher Order Function(HOF) and 
 * the function which is passed as a parameter is called CallBack Function. */

function task1() {
    console.log('task1 in progress');
}


function task2(callback) {
    console.log('task2 in progress');
    callback();
}

task2(task1); // we cannot call task2(task1())

// we can also pass anynomous function
const task3 = (() => {
    console.log('some task is in progress');
})

task3(); //some task is in progress

// How to pass the parameters into the callback function

function task4(message) {
    console.log(message);
}

function task5(callback) {
    console.log('Task 5');
    callback();
}

task5(() => task4('Task4'));
/**
 * Task 5
 * Task 4
 */


/**Types of  Callbacks
 * 1. Asynchronous Callback -
 * 2. Synchronous Callback
 */

// Example of Synchronous Callback

function sendNotification() {
    console.log('Your profile is shortlisted for the interview.');
}

function applyForJob(callback) {
    console.log('Your resume has uploaded');
    console.log('Your Request is in progress');
    callback();
}

applyForJob(sendNotification);

console.log('Some other stuff in progress');

/**
Your resume has uploaded
Your Request is in progress
Your profile is shortlisted for the interview.
Some other stuff in progress
 */


// If we want to delay the callback after certain time like want to
// fetch the details from database and all ,then we go for  'Async' Callback.

// Async Callback

function sendAsyncNotification() {
    console.log('Your profile is shortlisted for the interview.');
}

function asyncApplyForJob(callback) {
    console.log('Your resume has uploaded');
    console.log('Your Request is in progress');
    setTimeout(() => {
        callback();
    }, 5000);
}

asyncApplyForJob(sendAsyncNotification);

console.log('Some other stuff in progress');