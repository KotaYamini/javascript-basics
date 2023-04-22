function getFrequency(string) {
    var freq = {};
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
};

console.log(getFrequency('Indivisibilities'));