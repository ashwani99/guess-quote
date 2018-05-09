const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question');

router.get('/questions', questionController.get_questions);

module.exports = router;
