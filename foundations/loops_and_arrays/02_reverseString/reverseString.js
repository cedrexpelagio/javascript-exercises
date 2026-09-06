const reverseString = function(string) {
    let letters = string.split('');
    let reversedWord = "";

    for (let i = letters.length - 1; i >= 0; i--){
        reversedWord += letters[i]; 
    }

    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
