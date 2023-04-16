/**
 * Optional chaining, represented by ?. in JavaScript, it is a new feature introduced in ES2020. Optional chaining changes the way properties are accessed from deeply nested objects. 
 * It fixes the problem of having to do multiple null checks when accessing a long chain of object properties in JavaScript
 */

const user = {
    name: 'yamini',
    // address: {
    //     city: 'tenali'
    // }
}

console.log(user.address); // {city: 'tenali'}
//console.log(user.address.city); // tenali // If i comment down the address object then it will return TypeError(: Cannot read property 'city' of undefined)
//console.log(user.address ? user.address.city : undefined); // tenali  // If i comment down the address object then it will return undefined
console.log(user.address && user.address.city); // undefined

let key = "accountToken";
const customerDetail = {
    userId: '12345',
    account: {
        //    accountToken: 'ABC1234',
        holder: {
            profile: {
                firstName: 'yamini',
                lastName: 'kota',
                birthDate: '24-08-1996'
            }
        },
        contacts: {
            address: {
                city: 'Delhi',
                state: 'Delhi',
                countryName: 'India'
            },
            phone: [
                {
                    type: 'Home',
                    phoneNumber: '5354646456'
                },
                {
                    type: 'Work',
                    phoneNumber: '7868765490'
                }
            ]
        }
    }
}
console.log('accountToken>>>>>', customerDetail.account[key]);

console.log(customerDetail.account.holder.profile.birthDate); // If i comment down the address object then it will return undefined


console.log(customerDetail.account &&
    customerDetail.account.holder &&
    customerDetail.account.holder.profile &&
    customerDetail.account.holder.profile.birthDate);


/**
 * The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn't exist.
 * The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and resturns undefined.
 */

/** We can also stop the execution of a function execution  using optional chaining*/
console.log(customerDetail.getDetail?.());

