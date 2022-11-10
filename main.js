// Whale Talk

var input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

// loop to go through the letter in the input variable string
for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (input[i] === 'e') {
        resultArray.push(input[i]);
    };

    if (input[i] === 'u') {
        resultArray.push(input[i]);
    };
    
// console.log(letter);

    for (let j = 0; j < vowels.length; j++) {
        const whaleLetter = vowels[j];
        
        // console.log(whaleLetter);

        if (letter === whaleLetter) {
            resultArray.push(whaleLetter);
        }

    }
}

var resultString = ((resultArray.join('')).toUpperCase());
console.log(resultString);
