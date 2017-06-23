//// A function to square a number
//var numSquare = function(numS) {
//    return numS * numS;
//};
//
//console.log(numSquare(4));
//
////A function to get the square root of a number
//
//var numRoot = function (numR) {
//    return Math.sqrt(numR)
//};
//
//console.log(numRoot(16));
//
////A function get the total of an array of numbers
//
//var numTotal = function (arr) {
//    var total= 0;
//    for(var i = 0; i < arr.length; i++) {
//        total += arr[i]
//    }
//    return total
//};
//
//console.log(numTotal([1, 2, 3]));

//A function that returns the largest element of an array

var maxTotal = function (arrM) {
    return Math.max.apply(Math, arrM);
};

console.log(maxTotal([1, 5, 7]));