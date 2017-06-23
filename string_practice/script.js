var userInput = prompt("Sentence please?");
//var index = parseInt(prompt("Please input a starting point"));

var userInputUpper = userInput.toUpperCase();
function splt () {
    if (userInput.length >= 20) {
        return userInput.substr(userInput.length / 2/*, userInput.length*/)
    } else {
        return userInput;
    }
};

//console.log(userInputUpper);
//console.log(userInput.length);
//console.log(userInput + " " + "is freaking aswesome!");
console.log(splt());
//console.log(userInput.substr(index));
