const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');
const { Question } = require("./api/models/question");

const app = express();

const routes = require("./api/routes/");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/", routes);

// error handling
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.json({
    error: {
      message: err.message
    }
  });
});

// initialize database
fs.readFile('seed/quotes.json', (err, data) => {
  let quote = JSON.parse(data);
  Question.insertMany(quote.questions, (error, docs) => {
    console.log('Database initiated...');
  });
});

module.exports = app;
