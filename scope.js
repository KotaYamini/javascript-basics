/* 
 Scope: Whatever written inside {} is treated as scope
 There are three scopes:
 1. Global Scope
 2. Functional Scope
 3. Block Scope

*/

// ES-5
// Global Scope


// Function Scope
var globalScope = 4; 

function startScope(){
 var globalScope = 5;
 console.log('inside Function', globalScope);
}
startScope();
console.log('outside Function', globalScope);


// ES-6
let a = 10;

if(true){
    let a = 11;
    console.log('inside Block',a);
}

console.log('outside Block',a)