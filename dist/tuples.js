"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    console.log('========== Tuples ==========');
    let person;
    person = ['Sadia Lima', 20, true];
    console.log(person);
    const user = ['Asad Anik', 23, 'ALL'];
    console.log(user);
    let coordinates = [40.7128, -74.0060];
    console.log(`Coordinates - ${coordinates}`);
    let backgroundColor = [255, 0, 128];
    console.log(`Background Color - rgb(${backgroundColor})`);
    let httpResponse = [200, "Success", { data: 2023 }];
    console.log(`HTTP Response - ${httpResponse}`);
    let dateTime = [2023, 8, 28, 12, 30, 0];
    console.log(`DateTime - ${dateTime}`);
    let keyValue = ["username", "john_doe"];
    console.log(`Key-Value - ${keyValue}`);
}
exports.default = default_1;
;
//# sourceMappingURL=tuples.js.map