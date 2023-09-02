export default function (): void {
    console.log('========== Type Aliases & Interfaces ==========');

    // Type Aliases..
    type UserID = number;
    type Point = { x: number; y: number };
    type Result = string | number;

    let id: UserID = 123;
    let origin: Point = { x: 0, y: 1 };
    let value: Result = "success";

    console.log(`id: ${id}, origin: ${origin}, value: ${value}`);

    // Interfaces..
    interface Person {
        firstName: string;
        lastName: string;
        age: number;
    }
    
    let person: Person = {
        firstName: "Asad",
        lastName: "Anik",
        age: 23
    };

    console.log("Person -- ", person);
}

