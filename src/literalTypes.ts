export default function (): void {
    console.log('========== Literal Types ==========');

    let gender: "male" | "female" | "other";
    // We can use any of thoes valus from Literal Types..
    gender = "female";
    console.log(`Gender - ${gender}`);


    // HTTP Status Codes..
    let statusCode: 200 | 201 | 400 | 403 | 404 | 500;
    // We can use any of thoes valus from Literal Types..
    statusCode = 404;
    console.log(`Status Code - ${statusCode}`);

    // With Boolean Types..
    let isDone: true | false;
    // We can use any of thoes valus from Literal Types..
    isDone = true;
    console.log(`isDone - ${isDone}`);
}