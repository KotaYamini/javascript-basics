const str = "react is a library";


// split -> convert string to Array
// sort  ->  sort the Array
// join -> convert Array to String


function reverseString(data) {
    const dataAsArray = data.split(" ");

    dataAsArray.sort((a, b) => {
        //ASC
        //  return a.length - b.length   

        //DESC
        return b.length - a.length
    })

    return dataAsArray.join(" ");

}

console.log(reverseString(str));

/**
 * For ASC: a is react library
 * For DESC: library react is a
 */