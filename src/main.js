"use strick";

let numMap = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Whizz',

}
let condition = (num, basicNum) => num % basicNum == 0;

function action(num3, strFizz) {
    return (num, result) => {
        if (condition(num, num3)) {
            result.push(strFizz)
            return true
        }
        return false
    }
}
function and(...rules) {
    return (num, resultArr) => {
        let isMatch = false;
        rules.map(rule => {
            let match = rule(num, resultArr)
            match && (isMatch = match)
        })
        return isMatch;
    }
}
function constantAction() {
    return (num, resultArr) =>
        resultArr.push(num.toString())
}
function any(...rules) {
    return (num, resultArr) => {
        rules.some(rule => (rule(num, resultArr)))
    }
}
function main(num) {

    let resultArr = [];
    let num3 = 3;
    let strFizz = 'Fizz';
    let num5 = 5;
    let strBuzz = 'Buzz';
    let num7 = 7;
    let strWhizz = 'Whizz';

    let r1 = action(num3, strFizz);
    let r2 = action(num5, strBuzz);
    let r3 = action(num7, strWhizz);

    let ruleAnd = and(r1, r2, r3)

    let rConstant = constantAction();
    let finalRule = any(ruleAnd, rConstant);

    finalRule(num, resultArr)
    return resultArr.join('');
}

module.exports = main;