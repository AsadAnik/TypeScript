"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const built_in_types_1 = __importDefault(require("./built-in-types"));
const arrays_1 = __importDefault(require("./arrays"));
const tuples_1 = __importDefault(require("./tuples"));
const enums_1 = __importDefault(require("./enums"));
const functions_1 = __importDefault(require("./functions"));
const objects_1 = __importDefault(require("./objects"));
const typeAliases_Interfaces_1 = __importDefault(require("./typeAliases@Interfaces"));
const unionTypes_1 = __importDefault(require("./unionTypes"));
const intersectionTypes_1 = __importDefault(require("./intersectionTypes"));
const literalTypes_1 = __importDefault(require("./literalTypes"));
const nullableTypes_1 = __importDefault(require("./nullableTypes"));
const optionalChaining_1 = __importDefault(require("./optionalChaining"));
const sentense = "Hello World of TypeScript";
console.log(sentense);
const num1 = 12;
const num2 = 24;
const callSum = sumFun(num1, num2);
console.log(callSum);
function sumFun(a, b) {
    return a + b;
}
(0, built_in_types_1.default)();
(0, arrays_1.default)();
(0, tuples_1.default)();
(0, enums_1.default)();
(0, functions_1.default)();
(0, objects_1.default)();
(0, typeAliases_Interfaces_1.default)();
(0, unionTypes_1.default)();
(0, intersectionTypes_1.default)();
(0, literalTypes_1.default)();
(0, nullableTypes_1.default)();
(0, optionalChaining_1.default)();
//# sourceMappingURL=app.js.map