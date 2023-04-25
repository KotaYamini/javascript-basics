/** A modern javascript utlity library delivering modularity,performance & extras. 
 * Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
 * Lodash’s modular methods are great for:
    1. Iterating arrays, objects, & strings
    2. Manipulating & testing values
    3. Creating composite functions
    Note:
    Arguments
        collection (Array|Object): The collection to iterate over.

    [predicate=_.identity] (Function): The function invoked per iteration.
        Returns (Array): Returns the new filtered array.


*/
import _ from 'lodash';

const a = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log(a);


var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

// _.filter
var usingFun = _.filter(users, function (o) { return !o.active });
console.log('usingFun>>>>>>', usingFun) //[ { user: 'fred', age: 40, active: false } ]

// The `_.matches` iteratee shorthand.
var matches = _.filter(users, { 'age': 36, 'active': true });
console.log('matches>>>>>', matches)  // [ { user: 'barney', age: 36, active: true } ]

// The `_.matchesProperty` iteratee shorthand.
var matchesProperty = _.filter(users, ['active', false]);
console.log('matchesProperty>>>', matchesProperty); // [ { user: 'fred', age: 40, active: false } ]

// The `_.property` iteratee shorthand.
var property = _.filter(users, 'active'); // here it will return the objects which have true in it.
console.log('property>>>>', property); // [ { user: 'barney', age: 36, active: true } ]


// Math functions

// => add
/**
 * Adds two numbers.
1.augend (number): The first number in an addition.
2.addend (number): The second number in an addition.

Syntax: _.add(augend, addend)
 */


var addTwo = _.add(6, 4); // => 10
console.log('addTwo>>>>', addTwo);


/**
 * Computes number rounded up to precision.
 * _.ceil(number, [precision=0])
 *  */


var ceilNum = _.ceil(4.006); // => 5
console.log(ceilNum);

