export default function (): void {
    console.log('========== Arrays ==========');
    // Numbers Array..
    const numbers: number[] = [1, 2, 3, 4, 5];
    console.log(numbers);

    // Some real-life examples..
    // Students Grades..
    interface Grade {
        subject: string;
        score: number;
    }

    let studentGrade: Grade[] = [
        { subject: "English", score: 120 },
        { subject: "Math", score: 150 }
    ];

    console.log("Students Grade -- ", studentGrade);

    // Shopping Cart..
    interface CartItem {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }

    const shoppingCartItems: CartItem[] = [
        { productId: "abc123", name: "iPhone Xs", price: 330, quantity: 12 },
        { productId: "xyz123", name: "Samsung Galaxy S10", price: 250, quantity: 10 },
    ];

    console.log("Shopping Cart -- ", shoppingCartItems);

    // Employee 
    interface Employee {
        id: number;
        name: string;
        position: string;
        salary: number;
    }
    
    let employees: Employee[] = [
        { id: 1, name: "Alice", position: "Manager", salary: 60000 },
        { id: 2, name: "Bob", position: "Developer", salary: 50000 }
    ];

    console.log("Employee list -- ", employees);
}