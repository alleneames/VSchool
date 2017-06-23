var assert = function (actual, expected) {
    if (expected != actual) {
        throw {actual: actual, expected: expected};
    } else {
        console.log("Success", {actual: actual, expected: expected});
    }
};

var describe = function (message, testFunc) {
    console.log(message)
    try {
        testFunc();
    } catch (err) {
        console.log("test Group Failed", err);
    }
};


var add = function (a, b) {
    return a + b;
};

var sub = function (a, b) {
    return a - b;
};

var mul = function (a, b) {
    return a * b;
};

var div = function (a, b) {
    return a / b;
};

var mod = function (a, b) {
    return a % b;
};

describe("test caculator", function () {
    assert(add(2, 3), 5); 
    assert(sub(2, 3), -1);
    assert(mul(2, 2), 4);
    assert(div(10, 5), 2);
    assert(mod(4, 2), 0);
});
