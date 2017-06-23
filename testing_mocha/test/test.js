var chai = require("chai");
var assert = chai.assert;

//import code
var cal = require("../app.js");

describe("a calculator", function() {
    
    //add test
    it("should return the sum of two numbers", function() {
        assert.equal(cal.add(2,2), 4);
        assert.equal(cal.add(-1,-1), -2);
    });
    
    //subtract test
    it("should return the sub of two numbers", function () {
        assert.equal(cal.sub(10,5), 5);
        assert.equal(cal.sub(-2,-1), -1);
    });
    
    //multiply test
    it("should return the multipication of two numbers", function () {
        assert.equal(cal.mul(2,2), 4);
        assert.equal(cal.mul(4,2), 8);
    });
    
    //modulas test
    it("should return the modulas of two numbers", function () {
        assert.equal(cal.mod(4,2), 0);
        assert.equal(cal.mod(7, 3), 1);
    });
});