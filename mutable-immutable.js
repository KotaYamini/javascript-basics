/**
 * If the value can change, the object is called "Mutable".
 * If the value cannot change, the object is called "Immutable".
 * 
 * Primitive values(strings,numbers, boolean, null & undefined) are those values which are stored direcly into memory location.These are immutable whose are once created & never changes its value.
 * Reference values are like "Arrays" & "Objects" are stored  in the variable location which is the pointer to the location in the memory. These are mutable in genral
 */


let x = 20;
let y = x; //here 'y' will create the seperate memory location which be different from 'x


y = y + 1;
console.log(x); //20
console.log(y);  //21


//Arrays
let a = ['value1', 'value2'];
let b = a; // Here 'b' is pointing to the same memory location
b.pop();
console.log(a); //['value1', 'value2']
console.log(b); //['value1', 'value2']

// Objects
let c = {
    name: 'yamini',
    address: 'tenali'
}

let d = c;
d.age = 27;

console.log('c>>>', c); //{ name: 'yamini', address: 'tenali', age: 27 }
console.log('d>>>', d); //{ name: 'yamini', address: 'tenali', age: 27 }

/** In the above scenarios both Arrays and Objects are mutable as they are pointing to the same address.
 * In order to make object or array immutable we use spread operator
 */


// Immutable Techiques
let i = ['value1', 'value2'];
let j = i.concat(); // Here 'j' is created in seperate memory location rather than pointing to  memory location of'i' 
j.pop();
let k = [...i];
k[2] = 'value3';

console.log(i); //[ 'value1', 'value2' ]
console.log(j); //[ 'value1' ]
console.log(k); //[ 'value1', 'value2', 'value3' ]


let f = {
    name: 'harsha',
    address: 'tenali'
}

let g = Object.assign({}, f); // Here we can either spread operator or Object.assign 
g.age = 29;
let h = { ...f };
h.nationality = 'Indian';
console.log(g); // { name: 'harsha', address: 'tenali', age: 29 }
console.log(f); // { name: 'harsha', address: 'tenali' }
console.log(h); //{ name: 'harsha', address: 'tenali', nationality: 'Indian' }