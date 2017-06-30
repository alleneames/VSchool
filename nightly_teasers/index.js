// Given a string, return a new string where 'not ' has been added to the front.
// However, if the string already begins with 'not', return the string unchanged.


//06.29.17
//let str1 = "how can anyone not have fun";
//let str2 = "not many people can";
////let test = str1.splice(3, 1);
////console.log(test);
//
////find not postion
//
////function to return string
//
//let notStr = (str) => {
//    let spliStr = str.split(" ");
//    let n = spliStr.indexOf("not");
//    
//    if(n == 0) {
//    return str;
//    } else {
////        return str.splice(3, 1);
//        return "not" + " " + str;
//    }
//};
//
//console.log(notStr(str1));

// Return true if the given string contains between 1 and 3 'e' chars.

let eStr = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "e") {
            result++;
        }
        
    }
    if(result >=1 && result <= 3) {
        return true;
    } else {
        return false;
    }
};
console.log(eStr("you are awesomee"));
