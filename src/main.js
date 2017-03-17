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
        }
    }
}
function andExector(...rules) {
    return (num, resultArr) => rules.map(rule => {
        rule(num, resultArr)
    })
}
function constantAction(resultArr, num) {
    if (resultArr.length == 0) resultArr.push(num.toString())
}
function main(num) {

    let resultArr = [];
    let num3 = 3;
    let strFizz = 'Fizz';
    let num5 = 5;
    let strBuzz = 'Buzz';
    let num7 = 7;
    let strWhizz = 'Whizz';

    r1 = action(num3, strFizz);
    r2 = action(num5, strBuzz);
    r3 = action(num7, strWhizz);

    ruleAnd = andExector(r1, r2, r3)
    ruleAnd(num, resultArr)

    constantAction(resultArr, num);

    return resultArr.join('');
}

module.exports = main;