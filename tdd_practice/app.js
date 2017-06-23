var lastTwo = function (num1, num2) {
    if (num1 % 10 == num2 % 10) {
        return true;
    } else {
        return false;
    }
};

var par = function (str) {
    return str.substring(1, str.length - 1);
}

module.exports = {
    lastTwo: lastTwo,
    par: par
};
