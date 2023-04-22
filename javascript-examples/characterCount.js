function getFrequency(string) {
    var freq = {};
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        console.log(character) // Here we will get all characters aone by one as we are fecthing letter at that particular index
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
};

console.log(getFrequency('Indivisibilities'));