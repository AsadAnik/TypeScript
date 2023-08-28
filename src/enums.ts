export default function (): void {
    console.log('========== Enums ==========');

    // Example..
    enum Size { Small, Medium, Large };
    console.log(Size);

    // Access values with multiple ways..
    let mySize = Size.Small;
    console.log(`My Size - ${mySize}`);

    let mySize2 = Size['Medium'];
    console.log(`My Size 2 - ${mySize2}`);

    // Starting with other values..
    enum Width { Sm = 2, Md, Lg };
    console.log(Width);

    // Days of the Week: Enums are commonly used to represent days of the week.
    enum DaysOfWeek { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
    let today: DaysOfWeek = DaysOfWeek.Friday;
    console.log(today);

    // Cardinal Directions: As shown earlier, enums can be used to represent cardinal directions.
    enum CardinalDirections { North, South, East, West };
    let heading: CardinalDirections = CardinalDirections.North;
    console.log(heading);

    // HTTP Status Codes: Enums can be used to represent HTTP status codes with meaningful names.
    enum HttpStatus { OK = 200, NotFound = 404, InternalServerError = 500 };
    let responseCode: HttpStatus = HttpStatus.NotFound;
    console.log(`Page Not Found ${responseCode}`);

    // Colors: Enums can also be used to represent colors.
    enum Color { Red = '#FF0000', Green = '#00FF00', Blue = '#0000FF' };
    let selectColor = Color.Green;
    console.log(`Green Color Code - ${selectColor}`);

    // Months: Enums can represent months of the year.
    enum Month { January = 1, February, March, April, May, June, July, August, September, October, November, December };

    let currentMonth = Month.July;
    console.log(`Special Month - ${currentMonth}`);
    
    
}