import dotenv from "dotenv";

console.log("The app is runniong");

dotenv.config();

console.log("The app is runniong");
console.log(process.env);

if (!process.env.HOST) {
    console.log("Missing HOST env var");
    process.exit();
}

console.log("The app is runniong"); 