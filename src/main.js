"use strick";

let numMap = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Whizz',

}
let condition = (num, basicNum) => num % basicNum == 0;

function main(num) {

    let result = [];
    if (condition(num, 3)) result.push('Fizz')
    if (condition(num, 5)) result.push('Buzz')
    if (condition(num, 7)) result.push('Whizz')

    if (result.length == 0) result.push(num.toString())

    return result.join('');
}

module.exports = main;