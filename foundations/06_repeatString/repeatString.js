const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let accumalator = "";

    for(let i = 0; i < num; i++){
        accumalator += string; 
    }

    return accumalator;

};

// Do not edit below this line
module.exports = repeatString;
