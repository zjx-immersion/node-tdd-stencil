"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../src/main.js");


describe("FizzBuzzWhizz", function () {
    //sinon.spy(console, 'log');


    let constant = 2;
    let num3 = 3;
    let num5 = 5;
    let num7 = 7;
    let result_Fizz = 'Fizz';
    let result_Buzz = 'Buzz';
    let result_Whizz = 'Whizz';


    it("input 2 return 2", function () {

        var result = main(constant);

        expect(constant.toString()).to.equal(result);
    });

    it("input 3 return Fizz", function () {
        let result = main(num3);
        expect(result_Fizz).to.equal(result);
    });

    it("input 5 return Buzz", function () {
        let result = main(num5);
        expect(result_Buzz).to.equal(result);
    });

    it("input 7 return Whizz", function () {
        let result = main(num7);
        expect(result_Whizz).to.equal(result);
    });

    it("input 3 * 5 return FizzBuzz", function () {

        var result = main(num3 * num5);
        var expect_string = `${result_Fizz}${result_Buzz}`;

        expect(expect_string).to.equal(result);
    });

    it("input 3 * 7 return FizzWhizz", function () {

        var result = main(num3 * num7);
        var expect_string = `${result_Fizz}${result_Whizz}`;

        expect(expect_string).to.equal(result);
    });

    it("input 5 * 7 return BuzzWhizz", function () {

        var result = main(num5 * num7);
        var expect_string = `${result_Buzz}${result_Whizz}`;

        expect(expect_string).to.equal(result);
    });

    it("input 3 * 5 * 7 return FizzBuzzWhizz", function () {

        var result = main(num3 * num5 * num7);
        var expect_string = `${result_Fizz}${result_Buzz}${result_Whizz}`;

        expect(expect_string).to.equal(result);
    });

});