import express from 'express'; //importing the express library

const app = express(); // creating the an app which executing the express request

app.listen(3001, ()=> {
    console.log("The server is listening for requests...");
});

