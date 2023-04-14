//ES5
function add(x,y){
    return x+y;
}

console.log(add(2,3));

// arrow function

const Sum = (x, y) => x+y;
console.log(Sum(3,4)); 


//arrow function with no arguments
const multiply = () => (5*8);
console.log(multiply());

//arrow function with single argument
const subtract = x => --x;
console.log(subtract(4));


// arrow function with returning the object should wrap with braces
const obj = () => ({name: 'yamini', address: 'tenali'});
console.log(obj());


//arrow function with object's inner nested objects
productname = '';
function addToCart(){
    this.productname= 'Laptop';

    // ES-5 Approach 
    this.getProduct = () =>{
        console.log('34>>>',this);
        const that = this; // we need to store the reference of 'this' in another variable in order to get execute the inner nested function efficiently.
        setTimeout(function(){ 
            console.log('37>>>>>>',that)
            console.log(that.productname);
        });
    }

    // ES-6 Approach
    this.getAllThings = () => {
        console.log('45>>>>>',this) 
    }

    this.getThing = function(){
        console.log(this);
     
        setTimeout(() =>{ //arrow function will refer to the parent function 'this' context
            console.log('48>>>>>',this) 
        })
    }
}

let objj = new addToCart();
console.log(objj.getProduct());
console.log(objj.getThing());

/* Note: Arrow functions doesnot have its own 'this' */


//arguments
// with function it would return the arguments 
function abc(){
   return console.log('arguments>>>>>',arguments);
}

console.log(abc(3,4,5));

// without rest operator fat arrow functions wont return the value.
const abcd =() =>{
    console.log('arguments2>>>>>',...arguments); // Reference Error : arguments is not defined.
}

console.log(abcd(7,8,9));


let myFunc = {  
    showArgs : () => {  // here 'this' wont work as it will takes the 'this' from the outer scope
    console.log('showArgs',...arguments); 
   } ,
   showAbc: function(){ // here 'this' will work as it is referring to the object scope
    console.log('showAbc', ...arguments);
   }
  }; 
  myFunc.showArgs(1, 2, 3, 4);

  const names = ["sam", "daniel", "peter"];
  const result = names.map(r => r.toUpperCase());