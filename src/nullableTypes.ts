export default function (): void {
    console.log('========== Literal Types ==========');

    interface UserProfile {
        username: string;
        email: string;
        age?: number | null; // Age can be a Number or Null..
        address?: string | null; // Address can be a String or Null..
    }

    let user1: UserProfile = {
        username: "Asad Anik",
        email: "engr.asadanik@gmail.com",
        age: 23,
        address: null
    };

    let user2: UserProfile = {
        username: "Sadia Lima",
        email: "sadia.lima@gmail.com"
    };

    console.log("User1 -- ", user1);
    console.log("User2 -- ", user2);
}