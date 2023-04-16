/*The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
 from arrays, or properties from objects, into distinct variables. */

const user = {
    firstName: 'Riya',
    lastName: 'Sharma',
    age: 30,
    address: {
        city: 'Delhi',
        country: 'India'
    }
}
//ES-5
const namee = user.firstName;
console.log('name>>>>>', namee);
// ES-6
const { firstName } = user; // this is more simpler than the above appraoch
console.log(firstName);

const {
    firstName: fname, lastName, age = 10,
    address: { city }
} = user;

/**
 * When we declare the age in object ,even though we give the default value it wont execute.
 * It will always take from object key value pair.
 */

console.log(fname); // Riya
console.log(lastName); // Sharma
console.log(age); // 10
console.log(city); // Delhi


const { firstName: fName, ...userInfo } = user; // Alwats the rest element must be the last element
console.log(firstName); // Riya
console.log(userInfo);
/**
 * {
  lastName: 'Sharma',
  age: 30,
  address: { city: 'Delhi', country: 'India' }
}
*/

// Array Destructuring
const scores = [10, 23, 99, 87, 45, 90, 67, 54, 21];

const [x, , c] = scores;

console.log(x); // 10
console.log(c); // 99

const [r, t, o, ...others] = scores;
console.log(r); // 10
console.log(t); // 23
console.log(o); // 99
console.log(others); // [ 87, 45, 90, 67, 54, 21 ]