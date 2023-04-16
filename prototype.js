/**
 * Every object in javascript inherits from Object.prototype
 * Whenever we create any object/variable/functions in javascript ,then js engine will push these
 *  hidden properties to my custom object & then js engine will attach these properties to my object/variable/functions.
 * 
 * Object.prototype
{
    constructor: ƒ, 
    __defineGetter__: ƒ,
    __defineSetter__: ƒ,
    hasOwnProperty: ƒ,
   __lookupGetter__: ƒ,
    …}constructor: ƒ Object(),
    hasOwnProperty: ƒ hasOwnProperty(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toLocaleString: ƒ toLocaleString(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf(),
    __defineGetter__: ƒ __defineGetter__(),
    __defineSetter__: ƒ __defineSetter__(),
    __lookupGetter__: ƒ __lookupGetter__(),
    __lookupSetter__: ƒ __lookupSetter__(),
    __proto__: (...),get __proto,
    __: ƒ __proto__,
    ()set __proto__: ƒ __proto__()
 */

let user = {
    name: "yamini",
    address: "tenali",
    dateOfBirth: "24-08-1996",
};

console.log(user.name);

console.log(user.__proto__ === Object.prototype); // true
/** Here user.__proto__ will internally points to the Object.prototype in js engine */


let score = [100, 33, 45, 90, 78];
console.log(score.__proto__ === Array.prototype); // true
/** Here score.__proto__ will internally points to the Array.prototype in js engine */

console.log(Array.prototype.__proto__ === Object.prototype); // true
/**Internally Array.prototype.__proto__ will points to the Object.prototype in js engine. This is called 'Prototype Chaning' */

console.log(Map.prototype.__proto__ === Object.prototype); // true

console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Boolean.prototype.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__); // null i.e., end of the chain

console.log(score.__proto__.__proto__.__proto__); // null
/** In the above example, score.__proto__ => Array.prototype => Object.prototype => null */