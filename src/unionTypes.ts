export default function (): void {
    console.log('========== Union Types ==========');

    // Union types..
    let value: string | number;
    value = 170977;
    value = "Asad Anik";
    console.log("Values -- ", value);

    // Another example.. to useses multiple variables..
    type Contact = string | number;

    let email: Contact = "engr.asadanik@gmail.com";
    let phone: Contact = 1234567890;

    console.log(`Email: ${email} | Phone: ${phone}`);
}
