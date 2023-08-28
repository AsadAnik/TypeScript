export default function (): void {
    console.log('========== Functions ==========');

    // Let's see the function with example of income tax..
    function calculateTax(income: number): number {
        if (income >= 50_000) {
            return income * 1.5;
        }
        return income;
    }

    const myIncomeWithTax = calculateTax(84_000);
    console.log(`My Income with Tax : ${myIncomeWithTax}`);

    // Function with default value..
    function yourName(fname: string, Mname: string, lname?: string): string {
        return `My name is ${fname} ${Mname} ${lname || ''}`;
    };

    const myFullName = yourName("Asad", "Anik");
    console.log(myFullName);

    // Default Parameter..
    function calculateTaxV2(income: number, taxYear = 2022): number {
        if (taxYear < 2023) {
            return income * 1.8;
        }
        return income * 1.2;
    }

    const myIncomeWithTaxV2 = calculateTaxV2(84_000);
    console.log(`My Income with V2 Tax : ${myIncomeWithTaxV2}`);

    // Function with Types..
    type MathOperation = (a: number, b: number) => number;

    const addition: MathOperation = function(a, b) {
        return a + b;
    };

    const sumation = addition(10, 5);
    console.log(`Addition : ${sumation}`);

    // Rest Peramater..
    function sumOfSerialNumbers(...numbers: number[]): number {
        return numbers.reduce((total, num) => total + num, 0);
    }

    const sumOfNumbers = sumOfSerialNumbers(1, 2, 3, 4, 5);
    console.log(sumOfNumbers);

    // Higher-Order Functions..
    function applyOperation(num1: number, num2: number, operation: MathOperation): number {
        return operation(num1, num2);
    };

    const result = applyOperation(23, 20, addition);
    console.log(`Result of Addition - ${result}`);

    // Callbacks..
    function fetchData(callBack: (data: string) => void): void {
        // Simulate asynchronous data fetching..
        setTimeout(() => {
            callBack("Data Fetched!");
        }, 1000);
    }

    fetchData((data) => {
        console.log(data);
    });
}   