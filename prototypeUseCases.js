/**
 * Prototype is one of the most important concept in javascript. Every object in javascript inherits from Object.prototype. 

There are basically 2 use case of prototype:
  1) adding properties and methods on Prototype object
  2) implement inheritance
 */

/* In javascript constructor function is used to create objects */
function User(name) {
    this.name = name;
    // this.getDetail = function () {
    //     console.log(this.name);
    // }
}

User.prototype.getDetail = function () {
    console.log(this.name);
}

let user1 = new User('Sneha');
let user2 = new User('Nisha');
user1.getDetail();
user2.getDetail();

console.log(user1.__proto__ === user2.__proto__); //true
console.log(user1.__proto__); //{ getDetail: [Function (anonymous)] }
console.log(user2.__proto__); //{ getDetail: [Function (anonymous)] }


function Users(name) {
    this.name = name;
}

Users.prototype.name = "Nisha";

let users1 = new User();
let users2 = new User();

users1.name = "Sneha";
console.log(users1.name); //Sneha  => Here js engine have checked for the name property on function first  and the goes to prototype and then given the name value 
console.log(users2.name);


let users = ["Nisha", "Sneha"];


Array.prototype.testMethod = function () {
    console.log("Some Random Method");
}


console.log('users', users.testMethod);
/**
function () {
    console.log("Some Random Method");
} */