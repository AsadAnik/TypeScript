export default function (): void {
    console.log('========== Tuples ==========');
    // Tuple..
    let person: [string, number, boolean];
    person = ['Sadia Lima', 20, true];
    console.log(person);

    // Define on Single Statement..
    const user: [string, number, unknown] = ['Asad Anik', 23, 'ALL'];
    console.log(user);

    // Tuples can be used to represent coordinates, such as latitude and longitude, which are of different types.
    let coordinates: [number, number] = [40.7128, -74.0060]; // New York City
    console.log(`Coordinates - ${coordinates}`);
    
    // Tuples can represent RGB color values with three numbers ranging from 0 to 255.
    let backgroundColor: [number, number, number] = [255, 0, 128]; // Bright pink
    console.log(`Background Color - rgb(${backgroundColor})`);

    // When dealing with HTTP responses, you might have a tuple containing the response status code and the response data.
    let httpResponse: [number, string, object] = [200, "Success", { data: 2023 }];
    console.log(`HTTP Response - ${httpResponse}`);

    // You can represent a date and time using a tuple with a number for the year, month, day, hour, minute, and second.
    let dateTime: [number, number, number, number, number, number] = [2023, 8, 28, 12, 30, 0];
    console.log(`DateTime - ${dateTime}`);

    // Tuples can also be used to represent key-value pairs in a limited fashion.
    let keyValue: [string, any] = ["username", "john_doe"];
    console.log(`Key-Value - ${keyValue}`);
};