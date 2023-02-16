const express = require('express');
const router = express.Router();
const passport = require('passport');
const commentsController = require('../controllers/commentsController');



router.post('/create', commentsController.create);

module.exports = router;