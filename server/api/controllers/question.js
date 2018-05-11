const Question = require("../models/question");

exports.get = (req, res) => {
  const limit = Number(req.query.limit);

  if (!limit) {
    res.status(404).json({
      error: { message: "limit is not provided" }
    });
  }

  let options = { limit: limit };
  Question.findRandom({}, {}, options, (err, quotes) => {
    if (!err) {
      res.send(quotes);
    } else {
      res.status(500).json({
        error: { message: "No results found" }
      });
    }
  });
};
