/**It is pause dinosaur on t
 * Runner.prototype.gameOver =()=>{}
 * 
 * Inheritance is very important feature of any language as it allows us to use methods and properties from parent class to child class but how we handle inheritance in class based language , 
 * it is completely different in javascript, as it is used prototype to implement inheritance .
 * In ES6 we have class concepts now but construction function used prototype to implement inheritance.

 */


function Phone() {
    this.modelNumber = "";
    this.getModelNumber = function () {
        return this.modelNumber;
    }
}

function Samsung() {
    this.modelNumber = "XXX-YYYY-ZZZ";
    this.latestFeature = function () {
        console.log(`Samsung phone has a galaxy z foldable smartphone`);
    }
}

Samsung.prototype = new Phone();
let obj = new Samsung();
console.log(obj.getModelNumber()); //XXX-YYYY-ZZZ Here Samsung object will search for getModelNumber method,  as we register the phone object to the samsung prototype it will get the instance of the method
obj.latestFeature();


/**
 * In prototypical inheritance, each object has an internal link to another object called its prototype. When a property or method is accessed on an object, and the object doesn't have that property or method, the JavaScript engine looks up the prototype chain to find it.
 */


// Constructor function or prototype object
function Animal(name) {
    this.name = name;
}

// Method on the prototype
Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

// Create a new object using the prototype
var cat = new Animal("Whiskers");

// Access property and method
console.log(cat.name);  // Output: Whiskers
cat.sayName();          // Output: My name is Whiskers
//   In this example, the Animal function serves as the prototype for the cat object. The cat object inherits the name property and the sayName method from its prototype.
//  The prototype object itself can also have a prototype, forming a chain of objects that ultimately leads to the base object, which is usually the global object or Object.prototype. This chain allows objects to inherit properties and methods from their prototypes and their prototype's prototypes, and so on.
//   Prototypical inheritance allows for efficient sharing of properties and methods among objects and is a key feature of prototype-based programming languages like JavaScript.





