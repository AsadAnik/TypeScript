"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    console.log('========== Arrays ==========');
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers);
    let studentGrade = [
        { subject: "English", score: 120 },
        { subject: "Math", score: 150 }
    ];
    console.log("Students Grade -- ", studentGrade);
    const shoppingCartItems = [
        { productId: "abc123", name: "iPhone Xs", price: 330, quantity: 12 },
        { productId: "xyz123", name: "Samsung Galaxy S10", price: 250, quantity: 10 },
    ];
    console.log("Shopping Cart -- ", shoppingCartItems);
    let employees = [
        { id: 1, name: "Alice", position: "Manager", salary: 60000 },
        { id: 2, name: "Bob", position: "Developer", salary: 50000 }
    ];
    console.log("Employee list -- ", employees);
}
exports.default = default_1;
//# sourceMappingURL=arrays.js.map