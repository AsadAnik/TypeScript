import buildInTypes from './built-in-types';
import arrays from './arrays';
import tuples from './tuples';
import enums from './enums';
import functions from './functions';
import objects from './objects';
import typeAliasesInterfaces from './typeAliases@Interfaces';
import unionTypes from './unionTypes';
import intersectionTypes from './intersectionTypes';
import literalTypes from './literalTypes';
import nullableTypes from './nullableTypes';
import optionalChaining from './optionalChaining';


/**
 * ==== Overview of TypeScript ====
 */
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

/**
 * ==== Lets calling the Functions for different learning chapters ====
 */

buildInTypes();
arrays();
tuples();
enums();
functions();
objects();
typeAliasesInterfaces();
unionTypes();
intersectionTypes();
literalTypes();
nullableTypes();
optionalChaining();