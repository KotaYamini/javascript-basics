// Count Duplicate Elements in an array
const items = ['a', 'b', 'c', 'a', 'b', 'b', 'd', 'd', 'e', 'f', 'f', 'f', 'f', 'g'];

function countDuplicates(data) {
    const output = {};
    data.map(r => { output[r] = (output[r] || 0) + 1 });
    return output;
}

console.log(countDuplicates(items)); //{ a: 2, b: 3, c: 1, d: 2, e: 1, f: 4, g: 1 }