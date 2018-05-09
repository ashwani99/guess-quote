const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const apiRoute = require('./question');

router.use('/', apiRoute);
router.use('/user', userRoutes);

module.exports = router;
