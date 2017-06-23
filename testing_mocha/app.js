var add = function(num1, num2) {
    return num1 + num2;
};

var sub = function(num1, num2) {
    return num1 - num2;
};

var mul = function(num1, num2) {
    return num1 * num2;
};

var mod = function(num1, num2) {
    return num1 % num2;
};

module.exports = {
    add: add,
    sub: sub,
    mul: mul,
    mod: mod

};