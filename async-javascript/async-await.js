function delay(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(i)
        }, i * 1000);
    });
}

async function test() {
    console.log('Started');
    for (let i = 0; i <= 10; i++) {
        const result = await delay(i);
        console.log(result);
    }
    console.log('Ended');
}

test();

/*
Started
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


