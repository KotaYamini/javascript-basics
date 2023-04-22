

function test() {
    console.log('Started');
    for (var i = 1; i <= 10; i++) { // Remembering the concept of 'closures',the inner function will remember the outer function scope
        setTimeout(() => { // So here 'i' is declared with 'var' instead of 'let' so it will print 11 for ten times instead 1 to 10 series.
            console.log(i);
        }, 1000);
    }
    console.log('Ended');
}

test();

/**
Started
Ended
11
11
11
11
11
11
11
11
11
11
 */


function unitTest() {
    console.log('Started');
    for (let j = 1; j <= 10; j++) { // Here it will print 1 to 10 series after 'Started' & 'Ended' onto  the console
        setTimeout(() => {
            console.log(j);
        }, 1000);
    }
    console.log('Ended');
}

unitTest();
/**
Started
Ended
1
2
3
4
5
6
7
8
9
10
 */
//Her 'for' loop is a synchronous and setTimeout is asynchronous function so it wont wait till i*1000

// As this approach is not suitable to make code synchronous in anyway we will go to promises

