"use strick";

let is = num => input => input % num == 0;

let to = result => num => result

let always = result => num => result;

let defValue = () => num => num

function appendResult(isMatch, resultArr, result) {
    if (isMatch) {
        resultArr.push(result);
    }
    return isMatch;
}
function action(is, to) {
    return (num, resultArr) => {
        return appendResult(is(num), resultArr, to(num));
    }
}

function and(...rules) {
    return (num, resultArr) => {
        newResultArr = []
        let isMatch = rules.every(rule => (rule(num, newResultArr)))
        isMatch && resultArr.push.apply(resultArr, newResultArr)
        return isMatch
    }
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

    let r1 = action(is(num3), to(strFizz));
    let r2 = action(is(num5), to(strBuzz));
    let r3 = action(is(num7), to(strWhizz));

    let ruleAnd1 = and(r1, r2)
    let ruleAnd2 = and(r1, r3)
    let ruleAnd3 = and(r2, r3)
    let ruleAnd4 = and(r1, r2, r3)

    //mergedRule = concat(r1, r2, r3)    it incudled r1, r2, r3, r1r2, r1r3, r2r3, r1r2r3
    //next refactor will use lodash

    let rConstant = action(always(true), defValue());

    let finalRule = any(ruleAnd4, ruleAnd3, ruleAnd2, ruleAnd1, r3, r2, r1, rConstant)
        ;

    finalRule(num, resultArr)
    return resultArr.join('');
}

module.exports = main;