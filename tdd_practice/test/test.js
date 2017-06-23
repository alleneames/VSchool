var chai = require("chai");
var assert = chai.assert;


var calc = require("../app.js");
describe("comparison", function () {

    //add test
    it("should return true if the last number matches", function () {
        assert.equal(calc.lastTwo(26636368, 98), true);
        assert.equal(calc.lastTwo(22, 32), true);

    });

    it("should return false if the last number doesn't match", function () {
        assert.equal(calc.lastTwo(43, 77), false);
        assert.equal(calc.lastTwo(22, 88), false);
    });


});

describe("return the first and last char", function () {
    it("should return the first and last char", function () {
        assert.equal(calc.par("hello"), "ell");
        assert.equal(calc.par("awesome"), "wesom");
    });
});
