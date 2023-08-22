import dotenv from "dotenv";
import express, { response } from "express";

console.log("The app is runniong");

dotenv.config();

const app = express();

console.log("The app is runniong");
console.log(process.env);

if (!process.env.HOST) {
    console.log("Missing HOST env var");
    process.exit();
}

console.log("The app is runniong"); 

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT} 🐒`);
});

// return the room temperature

app.get("/temperature", (request, response) => {
    response.send({temperature: temperature});
});