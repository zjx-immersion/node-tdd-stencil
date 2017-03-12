"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../src/main.js");

describe("words frequency validation", function() {
    //sinon.spy(console, 'log');

    it("get [] when input empty string", function() {

        var result = main("");
        var expectResult = "";

        expect(result).to.equal(expectResult);
    });


    it("get one word given one word", function() {

        var result = main("the");
        var expectResult = "the 1";

        expect(result).to.equal(expectResult);
    });

    it("get two word given two word", function() {

        var result = main("the is");
        var expectResult = "the 1 \r\n is 1";

        expect(result).to.equal(expectResult);
    });

    it("get two word given three word", function() {

        var result = main("the the is");
        var expectResult = "the 2 \r\n is 1";

        expect(result).to.equal(expectResult);
    });


1
    it("get two word with orderd given three word", function() {

        var result = main("the is is");
        var expectResult = "is 2 \r\n the 1";

        expect(result).to.equal(expectResult);
    });

});