/**It is pause dinosaur on t
 * Runner.prototype.gameOver =()=>{}
 * 
 * Inheritance is very important feature of any language as it allows us to use methods and properties from parent class to child class but how we handle inheritance in class based language , 
 * it is completely different in javascript as Javascript used prototype to implement inheritance .
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