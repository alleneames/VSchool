//character video game player
//name
//health
//inv

//takeDamage -> subtract damage from health
//healDamage -> add health to health
//additemToInv -> add a string to your inv []

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

var Player = function (name, health, inv) {
    this.name = name;
    this.health = health || 50;
    this.inv = inv || [];
    this.takeDamage = function(dam) {
        this.health -+ dam;
    };
    this.healDamage = function(dam) {
        this.health += dam;
    };
    this.addItem = function(item) {
        this.inv.push(item);
    };
};


describe("Test character has attributes", function() {
    var player = new Player ("testPlayerName");
        assert(player.name, "testPlayerName");
        assert(player.health, 100);
        assert(player.inv.length, 0);
});

describe("Test character methods", function () {
    var player = new Player ("testPlayerName");
        player.takeDamage(30);
        assert(player.health, 70);
        player.healDamage(25);
        assert(player.health, 90)
        player.addItem("Sword");
        assert(player.inv.length, 1);
});