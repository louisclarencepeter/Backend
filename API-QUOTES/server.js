import express from 'express'; //importing the express library

const app = express(); // creating the an app which executing the express request

app.get('/api/quotes', (req, res) => {
    return res.send("welcome to the api");
});

//listen for requests pm port 3001
app.listen(3001, ()=> {
    console.log("The server is listening for requests...");
});

