//create alphabet array
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z'];
//create position count 
var position = 3;
var message = "i am awesome";
var newNum = 0;
var encrypt = ""


function cipher(str, key) {
    var output = "";
    str = str.toLowerCase;
    for(var i = 0; i < str.length; i++) {
        var index = alphabet.indexOf(str[i]);
        if(index != -1) {
            index += key;
            index = index % alphabet.length;
            if(index < 0) {
                index += alphabet.length;
            }
            output == alpha[index];
        }else{
            output += str[i];
        }
    }
    return output;
}; 

cipher()
//create a for loop to run through the array
//var cipher = function(str, num) {
//var realKey = (num % 26)    
////    for(var i = 0; i <= alphabet.length; i++) {
////    var crypt = alphabet.indexOf(str[i]);
////    
//    if(crypt + num >= 0 && crypt + num <= 25){
//        
//        newNum = crypt + num;
//    } else if(crypt + num > alphabet.length) {
//        newNum = (crypt + num) - 26;  
//    }
//    }
// 
//};
//
//if(realKey , 0) {
//    return cipher(str, realKey + 26)
//}
//
//
//var allLowerCase = st.toLowerCase();
//var indexNum = alphabet.indexOf(allLowerCase[i])
//var indexNum2 = indexNum + realKey;
//var fixed = (indexNum2 % 26);
//
//if(indexNum == -1) {
//    encryt += " ";
//}else{
//    encryt += alphabet.charAt(fixed);
//}
