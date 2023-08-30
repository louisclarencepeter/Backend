import express from 'express'; //importing the express library

const app = express(); // creating the an app which executing the express request

//in-memory database

const quotes = [
    {quote:'It\'s not a bug; it\'s an undocumented feature.', author:'Anonynous'},
    {quote:'Coding like poetry should be short and concise', author:'Santosh Kalwar'}
]

app.get('/api/quotes', (req, res) => {
    return res.send("welcome to the api");
});

//listen for requests pm port 3001
app.listen(3001, ()=> {
    console.log("The server is listening for requests...");
});

