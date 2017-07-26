let readlineSync = require("readline-sync");
let cal = require("./cal.js");

let calData = readlineSync.question("[+] Would you like to 'add', 'sub', 'mul', div', or 'mod' ");

let num1 = readlineSync.question("[+] Give me the first number you want to calculate ");
num1 = Number(num1);

let num2 = readlineSync.question("[+] Give me the second number you want to calulate ");
num2 = Number(num2);

if(calData === "add") {
    console.log(cal.add(num1, num2));
} else if(calData === "sub") {
    console.log(cal.sub(num1, num2));
} else if(calData === "div") {
    console.log(cal.div(num1, num2));
} else if(calData === "mul") {
    console.log(cal.mul(num1, num2));
}else if(calData === "mod") {
    console.log(cal.mod(num1, num2));
};

let myArray= {
    ["o","o","o"],
    ["o","o","o"]
};

let newArray = myArray.toString();

console.log(newArray);

// console.log("Welcome to my calculator");
// console.log(cal.add(2, 2));
// console.log(cal.sub(4, 2));
// console.log(cal.mul(2, 6));
// console.log(cal.div(8, 4));
// console.log(cal.mod(10, 4));