import express from "express"; //importing the express library

const app = express(); // creating the an app which executing the express request

//in-memory database
const quotes = [
  {
    quote: "It's not a bug; it's an undocumented feature.",
    author: "Anonynous",
  },
  {
    quote: "Coding like poetry should be short and concise",
    author: "Santosh Kalwar",
  },
];

app.use(express.json());

app.get("/api/quotes", (req, res) => {
  return res.send(quotes);
});

app.post("/api/quotes/add", (req, res) => {
  console.log("request object", req.body);

  const newQuotes = {
    quote: req.body.quote, //use body information
    author: req.body.author, //use body information
  };

  quotes.push(newQuotes);

  return res.send("Post created");
});

//listen for requests pm port 3001
app.listen(3001, () => {
  console.log("The server is listening for requests...");
});
