"use strick";

let numMap = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Whizz',

}
let condition = (num, basicNum) => num % basicNum == 0;

function action(num, num3, result, strFizz) {
    return () => {
        if (condition(num, num3)) {
            result.push(strFizz)
        }
    }
}
function main(num) {

    let result = [];
    let num3 = 3;
    let strFizz = 'Fizz';
    let num5 = 5;
    let strBuzz = 'Buzz';
    let num7 = 7;
    let strWhizz = 'Whizz';

    r1 = action(num, num3, result, strFizz);
    r2 = action(num, num5, result, strBuzz);
    r3 = action(num, num7, result, strWhizz);

    r1()
    r2()
    r3()

    if (result.length == 0) result.push(num.toString())

    return result.join('');
}

module.exports = main;