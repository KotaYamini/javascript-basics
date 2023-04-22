const users = ['harsha@gmail.com', 'yamini@gmail.com', 'rajani@gmail.com', 'uma@gmail.com'];


function delay(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Email to user ${user}`);
        }, 1000)
    });
}


async function sendEmail() {
    for (let user of users) {
        const confirmation = await delay(user);
        console.log(confirmation);
    }
    console.log('Email sent to all the users');
}

sendEmail();
/**
 Email to user rajani@gmail.com
 Email to user uma@gmail.com
 Email sent to all the users
 */

// Here we will print