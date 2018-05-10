const Question = require("../models/question");

exports.get = (req, res) => {
    const limit = Number(req.query.limit);

    if (!limit) {
        res.status(404).json({
            error: 'limit is not provided'
        });
    }

    Question.count()
        .exec()
        .then(count => {
            const random = Math.floor(Math.random() * count);
            return Question.find()
                .skip(random)
                .limit(limit)
                .exec()
        })
        .then(quotes => {
            res.send(quotes);
        });
};
