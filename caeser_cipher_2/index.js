let cipher = (str, amount)=> {
    if(amount < 0) return cipher(str, amount + 26);

    var output = '';

    for(let i = 0; i < str.length; i++) {
        var c = str[i];
        if(c.match(/[a-z]/i)) {
            var code = str.charCodeAt(i);
            if((code >= 65) && (code<= 122))
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
        output += c;
    }
    return output;
};

//encrypt
console.log(cipher("I am awesomez", 3));
//decrypt
console.log(cipher("I am awesomez", -3));