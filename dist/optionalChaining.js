"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var _a, _b;
    console.log('========== Optional Chaining ==========');
    function getCustomer(id) {
        return id === 0 ? null : { birthday: new Date() };
    }
    let customer = getCustomer(0);
    console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
    let user1 = {
        username: "asadanik",
        email: "engr.asadanik@gmail.com",
        address: {
            street: "123 Main St.",
            city: "Dhaka",
            zipCode: 12345
        }
    };
    let user2 = {
        username: "sadialima",
        email: "sadia.lima@gmail.com"
    };
    console.log((_a = user1.address) === null || _a === void 0 ? void 0 : _a.city);
    console.log((_b = user2 === null || user2 === void 0 ? void 0 : user2.address) === null || _b === void 0 ? void 0 : _b.city);
}
exports.default = default_1;
//# sourceMappingURL=optionalChaining.js.map