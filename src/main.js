"use strick";

let numMap = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Whizz',

}

let is = num => (input) => input % num == 0;

let to = result => num => result

let always = result => num => result;

let defValue = () => num => num

function action(is, to) {
    return (num, resultArr) => {
        let isMatch = false
        if (is(num)) {
            resultArr.push(to(num));
            isMatch = true
        }
        return isMatch
    }
}

function and(...rules) {
    return (num, resultArr) => {
        newResultArr = []
        let isMatch = true;
        rules.map(rule => {
            let match = rule(num, newResultArr)
            !match && (isMatch = match)
        })
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

    let rConstant = action(always(true), defValue());

    let finalRule = any(ruleAnd4, ruleAnd3, ruleAnd2, ruleAnd1, r3, r2, r1, rConstant)
        ;

    finalRule(num, resultArr)
    return resultArr.join('');
}

module.exports = main;