/**
 * Prototype is one of the most important concept in javascript. Every object in javascript inherits from Object.prototype. 

There are basically 2 use case of prototype:
  1) adding properties and methods on Prototype object
  2) implement inheritance
 */

/* In javascript constructor function is used to create objects */
function User(name) {
    this.name = name;  // property
    this.getDetail = function () { // method
        console.log(this.name);
    }
}

User.prototype.getDetail = function () {
    console.log(this.name);
}

let user1 = new User('Sneha'); // creation of object from a function
let user2 = new User('Nisha');
user1.getDetail();
user2.getDetail();

/**Here both user1and user2 are sharing the same prototype */
console.log(user1.__proto__ === user2.__proto__); //true
console.log(user1.__proto__); //{ getDetail: [Function (anonymous)] }
console.log(user2.__proto__); //{ getDetail: [Function (anonymous)] }


function Users(name) {
    this.name = name;
}

Users.prototype.name = "Nisha";



let users1 = new Users();
let users2 = new Users();

users1.name = "Sneha";
console.log(users1.name); //Sneha  => Here js engine have checked for the name property on function first if it doesn't find then it will goes to prototype i.e.,users1.__proto__ and then given the name value 
console.log(users2.name); // undefined

/**
 * Here  we should never try to add primitive type to the prototype (i.e.,Users.prototype.name = "Nisha";), 
 * always use the constructor that means function and prototype altogether to solve this issue
 * As constructor will creates the different instance 
 */


Users.prototype.getDetail = function () {
    console.log(this.name);
}

let users3 = new Users('Nisha');
let users4 = new Users('Sneha');

console.log('users1__proto__>>>>>', users1.__proto__); /* { name: 'Nisha' } */
console.log('users2__proto__>>>>>', users2.__proto__); /* { name: 'Nisha' } */


// Adding properties & Methods to Array using prototype
let users5 = ["Nisha", "Sneha"];


Array.prototype.testMethod = function () {
    console.log("Some Random Method");
}


console.log('users5', users5.testMethod);
/**
function () {
    console.log("Some Random Method");
} */