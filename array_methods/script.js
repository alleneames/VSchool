var fruit = ["banana", "apple", "orange", "watermelon"];  

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var test = vegetables.pop();
//console.log(vegetables);
//
var test2 = fruit.splice(0, 1);
//console.log(fruit)

//var test8 = fruit.indexOf("orange");
//console.log(fruit.indexOf("orange"));

var test3 = fruit.push(fruit.indexOf("orange"));
//console.log(fruit);

var test7 = vegetables.length;
//console.log(vegetables.length);

var test4 = vegetables.push(vegetables.length);
//console.log(vegetables);

var food = fruit.concat(vegetables);
//console.log(food);

var test5 = food.splice(4, 2);
//console.log(food);

var test6 = food.reverse();

console.log(food);