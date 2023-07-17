// callbyReference - ShallowCopy - Mutable Object
// callbyValue - DeepCopy - Immutable Object

/**
 * Shallow Copy => When we try to copy the original value of a variable into another variable then only the memory address of the original variable is copied into another variable.
 * Deep Copy => When we try to copy the original value of a variable into another varaible then  it will point to different reference address.
 *  */

/**
 * Generally Primitive Types(Number,boolean,string,null,undefined) are immutable and it always create  a deep copy.
 * Non Primitive Types(Array, objects) are mutable and it always create a shallow copy.
 *   */

// Primitive Types
let originalValue = 10;
let copiedValue = originalValue;

console.log(originalValue); //10
console.log(copiedValue); //10

copiedValue = 20;
console.log(originalValue); //10 
console.log(copiedValue); //20


// Non -Primitive Types

//Objects
//1. Using Assignment Operator
let originalObject = {
    name: 'John',
    age: 20,
    getName: function () {
        return this.name;
    }
}

let copiedObject = originalObject;

console.log(originalObject); // { name: 'John', age: 20 }
console.log(copiedObject); // { name: 'John', age: 20 }

copiedObject.age = 34;

console.log(originalObject); // { name: 'John', age: 34 }
console.log(copiedObject); // { name: 'John', age: 34 }

//2. JSON.parse(JSON.Stringify())
let copiedJSONObj = JSON.parse(JSON.stringify(originalObject));
console.log(originalObject); //{ name: 'John', age: 34 }
console.log(copiedJSONObj); //{ name: 'John', age: 34 }

copiedJSONObj.name = 'Peter';
console.log(originalObject); //{ name: 'John', age: 34 }
console.log(copiedJSONObj); //{ name: 'Peter', age: 34 }

// Note: The disadvantage is with  JSON.parse(JSON.Stringify) method is that it wont return the functions with in the originalObject.

// 3. Object.assign()
let originalObj = {
    name: 'Yamini',
    age: 20,
    getName: function () {
        return this.name;
    },
    address: {
        city: 'Delhi',
        country: 'India'
    }
}


let copiedObj = Object.assign({}, originalObj);

console.log(originalObj);
console.log(copiedObj);

copiedObj.name = 'harsha';
copiedObj.address.city = 'Gujarat';
console.log(originalObj); /** {
    name: 'Yamini',
    age: 20,
    getName: function () {
        return this.name;
    },
    address: {
        city: 'Gujarat',
        country: 'India'
    }
} */
console.log(copiedObj); /**
 {
    name: 'harsha',
    age: 20,
    getName: function () {
        return this.name;
    },
    address: {
        city: 'Gujarat',
        country: 'India'
    }
} */


// Using spread operator
let copiedObjj = { ...originalObj };

copiedObjj = {
    ...copiedObjj,
    name: 'Alisha',
    address: {
        ...copiedObjj.address,
        city: 'Goa'
    }
}

console.log(originalObj);
/**
 * {
  name: 'Yamini',
  age: 20,
  getName: [Function: getName],
  address: { city: 'Gujarat', country: 'India' }
}
 */
console.log(copiedObjj);
/**
 * {
  name: 'Alisha',
  age: 20,
  getName: [Function: getName],
  address: { city: 'Goa', country: 'India' }
}
 */


/**
 * Shallow Copy:
A shallow copy creates a new object or array, but it only copies the references of the original elements. In other words, the new copy points to the same memory locations as the original elements.
 Modifying a property of the original object or array will reflect in the shallow copy, as they still reference the same underlying data.
 */

// Shallow copy of an object
const originalObjjj = { name: "John", age: 25 };
const shallowCopyObj = Object.assign({}, originalObjjj);

originalObj.age = 30; // Modifying originalObj

console.log(originalObjjj);      // Output: { name: "John", age: 30 }
console.log(shallowCopyObj);   // Output: { name: "John", age: 25 }