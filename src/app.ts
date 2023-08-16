const sentense: string = "Hello World of TypeScript";
console.log(sentense);

// Makding the Sum Machine Values..
const num1: number = 12;
const num2: number = 24;
const callSum: number = sumFun(num1, num2);
console.log(callSum);

/**
 * ===== Sum Function =====
 * @param a 
 * @param b 
 * @returns 
 */
function sumFun(a: number, b: number): number {
    return a + b;
}

