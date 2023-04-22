const input = "I love Javascript";


function reverseString(data) {
    const arrayInput = data.split(" ");

    const result = arrayInput.map(d => {
        return d.split("").reverse().join("");
    });

    return result.join(" ");
}

console.log(reverseString(input)); //I evol tpircsavaJ

// Reverse a string in javascript without using any inbuilt function

function reverse1(str) {
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) {
        //  r += str[i];
        r += str.charAt(i);
    }
    return r;
}

console.log(reverse1("javascript"))  //tpircsavaj