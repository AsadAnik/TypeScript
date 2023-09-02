"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    console.log('========== Objects ==========');
    const employee = {
        id: 1,
        name: "Asad Anik",
        retire: (date) => {
            console.log(date);
        }
    };
    console.log("Object with Types -- ", employee);
    let user = {
        username: "john_doe",
        email: "john@example.com",
        age: 25
    };
    console.log("User -- ", user);
    let person = {
        firstName: "Alice",
        lastName: "Smith",
        age: 30
    };
    console.log("Person -- ", person);
}
exports.default = default_1;
//# sourceMappingURL=objects.js.map