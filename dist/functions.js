"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    console.log('========== Functions ==========');
    function calculateTax(income) {
        if (income >= 50000) {
            return income * 1.5;
        }
        return income;
    }
    const myIncomeWithTax = calculateTax(84000);
    console.log(`My Income with Tax : ${myIncomeWithTax}`);
    function yourName(fname, Mname, lname) {
        return `My name is ${fname} ${Mname} ${lname || ''}`;
    }
    ;
    const myFullName = yourName("Asad", "Anik");
    console.log(myFullName);
    function calculateTaxV2(income, taxYear = 2022) {
        if (taxYear < 2023) {
            return income * 1.8;
        }
        return income * 1.2;
    }
    const myIncomeWithTaxV2 = calculateTaxV2(84000);
    console.log(`My Income with V2 Tax : ${myIncomeWithTaxV2}`);
    const addition = function (a, b) {
        return a + b;
    };
    const sumation = addition(10, 5);
    console.log(`Addition : ${sumation}`);
    function sumOfSerialNumbers(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    const sumOfNumbers = sumOfSerialNumbers(1, 2, 3, 4, 5);
    console.log(sumOfNumbers);
    function applyOperation(num1, num2, operation) {
        return operation(num1, num2);
    }
    ;
    const result = applyOperation(23, 20, addition);
    console.log(`Result of Addition - ${result}`);
    function fetchData(callBack) {
        setTimeout(() => {
            callBack("Data Fetched!");
        }, 1000);
    }
    fetchData((data) => {
        console.log(data);
    });
}
exports.default = default_1;
//# sourceMappingURL=functions.js.map