var main = require("./src/main.js")

console.log(main());

var products = [
    { name: 'Running shoes', price: 75 },
    { name: 'Golf shoes', price: 85 },
    { name: 'Dress shoes', price: 95 },
    { name: 'Walking shoes', price: 65 },
    { name: 'Sandals', price: 55 }
];

for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
}

console.log("---------------------------");

products.forEach((product, index) => {
    console.log(product);
});

console.log("---------------------------");

//yield
function* myGenerator() {
    console.log(1);
    let a = yield 'first yield';
    console.log(a); // 2
    let b = yield 'second yield';
    console.log(b); // 3
    return 'hi';
}

let iterator = myGenerator();
let firstYield = iterator.next(); // { value: 'first yield', done: false }
let secondYield = iterator.next(2); // { value: 'second yield', done: false }
let generatorReturnValue = iterator.next(3); // { value: 'hi', done: true }
console.log(firstYield.value + "-" + secondYield.value + "-" + generatorReturnValue.value);