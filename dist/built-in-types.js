"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    console.log('========== Primitive Datatypes ==========');
    let sales = 123;
    let course = 'TypeScript';
    let is_published = true;
    console.log(`sales = ${sales} [${typeof sales}]`);
    console.log(`course = ${course} [${typeof course}]`);
    console.log(`is_published = ${is_published} [${typeof is_published}]`);
    console.log('========== Any Type ==========');
    let sales2;
    sales2 = 'ABC';
    sales2 = 123;
    console.log(`sales2 = ${sales2} [${typeof sales2}]`);
}
exports.default = default_1;
//# sourceMappingURL=built-in-types.js.map