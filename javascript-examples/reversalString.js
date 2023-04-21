const input = "I love Javascript";


function reverseString(data) {
    const arrayInput = data.split(" ");

    const result = arrayInput.map(d => {
        return d.split("").reverse().join("");
    });

    return result.join(" ");
}

console.log(reverseString(input));