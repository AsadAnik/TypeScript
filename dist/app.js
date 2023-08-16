"use strict";
const sentense = "Hello World of TypeScript";
console.log(sentense);
const num1 = 12;
const num2 = 24;
const callSum = sumFun(num1, num2);
console.log(callSum);
function sumFun(a, b) {
    return a + b;
}
