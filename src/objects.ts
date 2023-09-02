export default function (): void {
    console.log('========== Objects ==========');

    // Object with Types..
    const employee: { id: number, name: string, retire: (date: Date) => void } = {
        id: 1,
        name: "Asad Anik",
        retire: (date: Date) => {
            console.log(date);
        }
    };

    console.log("Object with Types -- ", employee);

    // With Type-Aliases..
    type UserProfile = {
        username: string;
        email: string;
        age: number;
    };
    
    let user: UserProfile = {
        username: "john_doe",
        email: "john@example.com",
        age: 25
    };

    console.log("User -- ", user);

    // With Interfaces..
    interface Person {
        firstName: string;
        lastName: string;
        age: number;
    }
    
    let person: Person = {
        firstName: "Alice",
        lastName: "Smith",
        age: 30
    };

    console.log("Person -- ", person);
}