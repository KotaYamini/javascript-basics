/**
 * The map() method created a new array populated with the results of calling a provided function on every element in the calling array.
 * But it doesnot change the original array.
 */

const users = ['sam', 'peter', 'daniel'];

//ES-5
function transformUpperCase(values) {
    return values.toUpperCase();
}
console.log('transformUpperCase>>>>', transformUpperCase(...users));


// ES-6
const modifiedUsers = users.map(value => value.toUpperCase());
console.log(modifiedUsers);


const users2 = [
    { id: 101, name: 'Alisha' },
    { id: 102, name: 'Kunal' },
    { id: 103, name: 'Raj' },
    { id: 104, name: 'Veer' },
    { id: 105, name: 'Sachin' },
    { id: 106, name: 'Rishabh' },
    { id: 107, name: 'Shiva' }
];

const users_list = users2.map(user => user.name);
console.log(users_list);
/**
 * [
  'Alisha', 'Kunal',
  'Raj',    'Veer',
  'Sachin', 'Rishabh',
  'Shiva'
]
 */


//foreach

const result = [];
users2.forEach((userData) => {
    result.push(userData.name);
});
console.log(result);

/**
 * Note: compared to forEach , map is very efficient as it executes the transfomation within one line where as forEach will take another array as well.
 */

/**
 * filter() method creates a new array with all elements that pass the test implemented by the provided function which doesnot change the original arra.
 */

const employees = [
    { id: 101, name: 'Alisha', profile: 'Junior Developer' },
    { id: 102, name: 'Kunal', profile: 'Senior Developer' },
    { id: 103, name: 'Raj', profile: 'Junior Developer' },
    { id: 104, name: 'Veer', profile: 'Senior Developer' },
    { id: 105, name: 'Sachin', profile: 'Senior Developer' },
    { id: 106, name: 'Rishabh', profile: 'Junior Developer' },
    { id: 107, name: 'Shiva', profile: 'Senior Developer' }
];

const experiencedEmployee = employees.filter(r => r.profile === 'Senior Developer');
console.log(experiencedEmployee);

const juniorEmployee = employees.filter(r => r.profile === 'Junior Developer');
console.log(juniorEmployee);


//reduce

const score = [100, 34, 78, 98, 90];

function calculate(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(calculate(score));

var totalScore = score.reduce((accumulator, value) => accumulator + value, 0); // accumulator is nothing but sum=0 in 'for' loop
console.log(totalScore);


const employees2 = [
    { id: 101, name: 'Alisha', profile: 'Junior Developer', rating1: 8, rating2: 10 },
    { id: 102, name: 'Kunal', profile: 'Senior Developer', rating1: 4, rating2: 9 },
    { id: 103, name: 'Raj', profile: 'Junior Developer', rating1: 6, rating2: 2 },
    { id: 104, name: 'Veer', profile: 'Senior Developer', rating1: 5, rating2: 8 },
    { id: 105, name: 'Sachin', profile: 'Senior Developer', rating1: 7, rating2: 7 },
    { id: 106, name: 'Rishabh', profile: 'Junior Developer', rating1: 10, rating2: 6 },
    { id: 107, name: 'Shiva', profile: 'Senior Developer', rating1: 4, rating2: 5 }
];


const seniorDevelopers = employees2.filter(r => r.profile === 'Senior Developer');
console.log(seniorDevelopers);/**[
    {
      id: 102,
      name: 'Kunal',
      profile: 'Senior Developer',
      rating1: 4,
      rating2: 9
    },
    {
      id: 104,
      name: 'Veer',
      profile: 'Senior Developer',
      id: 107,
      name: 'Shiva',
      profile: 'Senior Developer',
      rating1: 4,
      rating2: 5
    }
  ] */

const totalRating = seniorDevelopers.map(d => d.rating1 + d.rating2);
console.log(totalRating); //[ 13, 13, 14, 9 ]

const totalRatingScore = totalRating.reduce((accumulator, value) => accumulator + value, 0);
console.log(totalRatingScore); //49


//chaining all the javascript operators
const seniorDevScore = employees2.filter(r => r.profile === 'Senior Developer').map(d => d.rating1 + d.rating2).reduce((accumulator, value) => accumulator + value, 0);
console.log(seniorDevScore); // 49

// Using Reduce
const totalScoreRatingUsingReduce = employees2.reduce((acc, value) => {
    if (value.profile == 'Senior Developer') {
        acc += value.rating1 + value.rating2
    }
    return acc;
}, 0)

console.log(totalScoreRatingUsingReduce)