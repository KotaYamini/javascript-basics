/**
 * call, apply and bind are predefined methods in javascript and its very using to handle this keyword .
 * 
 * 'this' keyword work quiet differently in javascript as compared to other object oriented language and that creates confusion for the programmers. 
 * 
 * Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. 
 * 
 * It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.
 * 
 * There are many benefits to method borrowing: It prevents the unnecessary duplication of code.
 * 
 * It allows the user to use methods of different objects without inheriting.
 * 
 * Using method borrowing prevents the replication of methods in multiple object blocks and saves time.
 * 
 * call, apply and bind method is just to implement method borrowing, where we can use explicitly specify what this should reference within the calling function.
 */


const Employee = {
    firstName: 'Swetha',
    lastName: 'Tiwari',
    getFullName: function () {
        console.log(this); // here it is pointing to the Employee object
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

Employee.getFullName();

// But when we try to store function from Employee into another variable then 'this' wont work fine as it gives undefined undefined

//const getEmpDetail = Employee.getFullName;
//getEmpDetail();  // It will gives the o/p of undefined undefined


//Traditional Approach of defining functions on two objects where it takes more time to code and do the repeate the same function on two different objects as well

const employee = {
    firstName: 'Yamini',
    lastName: 'Kota',
    getFullName: function () {
        console.log(this); // here it is pointing to the Employee object
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


const customer = {
    firstName: 'Harsha',
    lastName: 'Kota',
    getFullName: function () {
        console.log(this); // here it is pointing to the Employee object
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

employee.getFullName(); // Yamini Kota
customer.getFullName(); //Harsha Kota


// concept of 'function borrowing'

const employeeDetail = {
    firstName: 'Yamini',
    lastName: 'Kota',
    getFullName: function (city, profile) {
        console.log(this); // here it is pointing to the customerDetail object { firstName: 'Harsha', lastName: 'Kota' }
        console.log(`r>>>>${this.firstName} ${this.lastName} and city is ${city} and profile is ${profile}`);
    }
}

const customerDetail = {
    firstName: 'Harsha',
    lastName: 'Kota'
}


employeeDetail.getFullName.call(customerDetail, 'Delhi', 'Instructor'); //Harsha Kota and city is Delhi and profile is Instructor will print as it is calling through 'call' method.
employeeDetail.getFullName.apply(customerDetail, ['Goa', 'Artist'])  // Harsha Kota and city is Goa and profile is Artist  will print as it is calling through 'apply' method.

/** 
 * Differnce between 'call' and 'apply' is that 'call' will the comma seperated parameters where as 'apply' will take parameters in the form of array.
 */

// Bind wont execute as soon as function is attached to the object..it should call

const handler = employeeDetail.getFullName.bind(customer);
handler('Andhrapradesh', 'consultant'); //  Harsha Kota and city is Andhrapradesh and profile is consultant

// 'bind' will execute only whenever the user want to wait and then execute it just like button click events.
function getFullNames(city, profile) {
    console.log(this); // here it is pointing to the customerDetail object { firstName: 'Harsha', lastName: 'Kota' }
    console.log(`r>>>>${this.firstName} ${this.lastName} and city is ${city} and profile is ${profile}`);
}

if (typeof window === "object") {
    const obj = document.getElementById('btn');
    obj.addEventListener('click',
        getFullNames.bind(customer, 'delhi', 'software Dev') //Harsha Kota and city is delhi and profile is software Dev
    );
}

/**
 * Execution =>
 * call & apply will execute at the time of binding.
 * bind will execute at the time when we execute the return function.
 * 
 * Parameter =>
 * call & bind are comma seperated.
 * apply is array containing parameters with comma seperated.
 * 
 * isReturn => 
 * 'bind' will returns and calls the same func whenver need just like in 'click' function.
 *  'call' & 'apply' will returns and calls the same func at the time of binding.
 */