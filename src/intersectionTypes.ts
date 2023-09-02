export default function (): void {
    console.log('========== Intersection Types ==========');

    // Interseciton Type with employees..
    type Person = {
        firstName: string;
        lastName: string;
        age: number;
    }

    type technicalSkills = {
        programmingLanguages: string[];
        tools: string[];
    }

    // Useses 2 things with Intersection Types..
    type Employee = Person & technicalSkills;

    const employee: Employee = {
        firstName: "Asad",
        lastName: "Anik",
        age: 23,
        programmingLanguages: ["TypeScript", "Python"],
        tools: ["Web Storm", "Pycharm"]
    }

    console.log("Employees with Skills -- ", employee);
}