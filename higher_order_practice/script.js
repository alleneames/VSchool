var myName = "John Doe";  
console.log(myName);

 function movieCheck(age) {  
   if(age < 0) {
     //throw "Error cannot be less than 0";
   } else if(age <= 12) {
     console.log("You can see PG movies");
   } else if(age >= 13 && age < 18) {
     console.log("You can see PG-13 movies");
   } else if(age >= 18) {
     console.log("You can see R rated movies");
   }
 }
 try {movieCheck(-1);
     }catch(err) {
         console.log(err);
     }

//var students = ["John", "Jacob", "Jingle", "Himer"];
//var nums = [1, 2, 3, 4, 10, 20, -5, 7];

//for (var i = 0; i < students.length; i++) {
//    console.log(students[i]);
//}

//forEach method

//students.forEach(function(item) {
//    console.log(item);
//});

//filter method

//---first way
//function odd (nums) {
//    return nums % 2 === 0;
//}
//
//function myFunction () {
//    console.log(nums.filter(odd));
//}
//
////---second way
//var even = nums.filter(function(item) {
//    return item % 2 != 0;
//})
//
//myFunction();
//console.log(even);


//sort method
//var retNums = nums.sort(function (a, b) {
//    return b - a;
//});
//
//console.log(retNums)

//reduce method
var arr = [1, 2, 3, 100];


var reduce = arr.reduce(function (total, amount) {
    return total + amount;
});

console.log(reduce);


//---- reduce method for an object
//var shoppingCart = [
//    {
//        name: "Beer",
//        cost: 5.00,
//        local: "Isle 15"
//    },
//    {
//        name: "Noodles",
//        cost: 2.50,
//        local: "Isle 12"
//    },
//    {
//        name: "Almonds",
//        cost: 6.00,
//        local: "Isle 3"
//    },
//];
//
//var reduce2 = shoppingCart.reduce(function(total, item) {
//    return total + item.cost
//}, 0);

//map method
//var students = ["Spencer", "Danyon", "Kacie"];
//
//[{
//    name: "",
//    grade: "A",
//    friends: []
//}]
//
//var mapping = students.map(function (item) {
//    return {
//        name: item,
//        grade: "A",
//        friends: []
//    }
//});
//
//console.log(mapping);
