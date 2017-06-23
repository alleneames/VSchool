var BedBluePrint = function (finish, color, style, size) {
    this.finish = finish;
    this.color = color;
    this.style = style;
    this.size = size;
};

var CouchBluePrint = function (size, fabric, color) {
    this.size = size;
    this.fabric = fabric;
    this.color = color;
};

var TableBluePrint = function (style, finish, color){
    this.style = style;
    this.finish = finish;
    this.color = color;
};

var TvBluePrint = function (size, color) {
    this.brand = "Samsung";
    this.size = size;
    this.color = color;
};

var myCouch = new CouchBluePrint("Love seat", "Velvet", "Black");
var myBed = new BedBluePrint("Wood", "black", "Low to floor", "California King");
var myTable = new TableBluePrint("Coffee Table", "wood", "black");
var myTv = new TvBluePrint("65in", "silver");

console.log(myCouch);
console.log(myBed);
console.log(myTable);
console.log(myTv);