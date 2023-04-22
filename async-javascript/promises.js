function delay(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(i)
        }, i * 1000);
    });
}


function test() {
    console.log('Started');
    for (let i = 0; i <= 10; i++) {
        const result = delay(i);
        result.then(result => console.log(result)); // with 'then' function here it will make continue to execute the next statements without waiting for prmoise to execute
    }
    console.log('Ended'); // So,we will go'async' & 'await' as they will make the code in asynchronous & execute in a synchronous way
}

test();

/**
Started
Ended
0
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