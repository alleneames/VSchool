//first problem
//var alpha = "abcdefghijklmn";
//
//for(var i = 0; i < alpha.length; i++) {
//    console.log(alpha[i]);
//};

//second problem
var userInput = "anything";
var search = "z";

function blue() {

    for (var i = 0; i < userInput.length; i++) {
        if (userInput[i] === search) {
            return i;
        }
    }
    return "This letter is not found";

}

console.log(blue());
