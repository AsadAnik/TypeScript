export default function (): void {
    console.log('========== Optional Chaining ==========');

    type Customer = {
        birthday: Date;
    };

    function getCustomer(id: number): Customer | null {
        return id === 0 ? null : { birthday: new Date() };
    }

    let customer = getCustomer(0);
    // Optional property access operator..
    console.log(customer?.birthday);


    // OPtional Chaining's another example..
    interface UserProfile {
        username: string;
        email: string;
        address?: {
            street: string;
            city: string;
            zipCode: number;
        }
    }
    
    let user1: UserProfile = {
        username: "asadanik",
        email: "engr.asadanik@gmail.com",
        address: {
            street: "123 Main St.",
            city: "Dhaka",
            zipCode: 12345
        }
    };
    
    let user2: UserProfile = {
        username: "sadialima",
        email: "sadia.lima@gmail.com"
    };
    
    console.log(user1.address?.city); // OUTPUT: "Dhaka"
    console.log(user2?.address?.city); // OUTPUT: undefined (no error)
}