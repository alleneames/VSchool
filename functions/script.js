//first function problem
//function sum(num1, num2) {
//    return(num1 + num2)
//};
//console.log(sum(4, 2));

//second function problem

//function larg(num1, num2, num3) {
//    if (num1 > num2 && num1 > num3) {
//        return num1;
//    } else if (num2 > num1 && num2 > num3) {
//        return num2;
//    } else {
//        return num3;
//    }
//};
//console.log(larg(4, 5, 6));



//third function problem
//function chk(num1) {
//    if (num1 % 3 === 0) {
//        return("odd");
//    } else {
//        return("even");
//    }
//};
//console.log(chk(10));

//forth function problem
//var string = []
//
//function str([]) {
//    if (string <= 20) {
//        return (string += );
//    }
//};
                
function string(sentence) {
    if (sentence.length <= 20) {
        return (sentence + " " + sentence)
    } else {
            var res = sentence.substr(0, (sentence.length/2));
            return (res);
        }
}
console.log(string("hello world tilda"))
