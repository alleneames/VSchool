let add = (num1, num2)=> {
    return num1 + num2;
}

let sub = (num1, num2)=> {
    return num1 - num2;
}

let mul = (num1, num2)=> {
    return num1 * num2;
}

let mod = (num1, num2)=> {
    return num1 % num2;
}

let div = (num1, num2)=> {
    return num1 / num2
}

module.exports = {
    add: add,
    sub: sub,
    mul: mul,
    mod: mod,
    div: div
};