/** Spread Operator is introduced in Es-6 and its syntax is quite simple, 3 dots followed by Iterbale{...}/Array[...] 
 * It is basically used in Arrays, Objects & Functions
 */

/**
 * What is spread operator?
 * The syntax is three dots(...) followed by the array(or iterable).
 * It expands the array into individual elements.So,it can be used to expand the array in a places where zero or more elements are expected.
 */

let userList = ['user1', 'user2'];
console.log(userList);
console.log(...userList);


//spread operator with arrays
console.log('....spread with arrays....');
const team1 = ['user1', 'user2'];
const team2 = ['user3'];
const newTeam = [...team1, ...team2];
console.log(newTeam);

const newTeamUsingConcat = team1.concat(team2);
console.log('newTeamUsingConcat>>>', newTeamUsingConcat);


// How to attach strings to arrays using 'concat' and '...'
const newTeamMember = "newTeamMember";
console.log(team1.concat(newTeamMember)); // [ 'user1', 'user2', 'newTeamMember' ] & It works fine
console.log([...team1, ...newTeamMember]);
/**
 * node spreadOperator
[ 'user1', 'user2' ]
  'user1', 'user2', 'n',
  'e',     'w',     'T',
  'e',     'a',     'm',
  'M',     'e',     'm',
  'b',     'e',     'r'
] & It spreads all the characters in a string
 */


// How to copying array from one array to another
console.log('...copying array...');
const productList1 = ['phone', 'adapter'];
const newProduct = [...productList1];

console.log(productList1); //[ 'phone', 'adapter' ]
console.log(newProduct); //[ 'phone', 'adapter' ]
productList1.push('light');
newProduct.push('Camera');

console.log(productList1); //[ 'phone', 'adapter', 'light' ]
console.log(newProduct); //[ 'phone', 'adapter', 'Camera' ] //It didn't modify the previous array


// Spread Operator with Objects used frequently for merging two objects
console.log('...Spread Operator with Objects...');
const emp = {
    name: 'John',
    job: 'developer'
}

const personalDetail = {
    age: 20
}

const clonedEmployee = { ...emp };
console.log(emp);
console.log('clonedEmployee>>>>>>', clonedEmployee); //{ name: 'John', job: 'developer' }

const employeeDetails = { ...emp, ...personalDetail };
console.log(employeeDetails); //{ name: 'John', job: 'developer', age: 20 }

// Spread Operator in function calls
console.log(Math.min(10, 5, 20, 9, 47)); //5

const scoreList = [100, 40, 67, 90]; // Here for arrays we have to get all individual elements as it is a iterable

//ES-5
console.log(Math.min.apply(null, scoreList)); //40

//ES-6
console.log(Math.min(...scoreList)); //40
console.log(Math.max(...scoreList)); //200

// Immutability  with spread operator.


const todos = [
    { task: 'reading', completed: true },
    { task: 'painting', completed: false }
]

const newTodo = { task: 'writing', completed: true };
function addTodo(newTodo) {
    return [...todos, { ...newTodo }];
}


console.log(addTodo(newTodo));
/**
 * [
  { task: 'reading', completed: true },
  { task: 'painting', completed: false },
  { task: 'writing', completed: true }
]
 */
console.log(todos);

/**
 * [
  { task: 'reading', completed: true },
  { task: 'painting', completed: false }
]
 */