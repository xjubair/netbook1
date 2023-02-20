const express = require('express');
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/postController');


const checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) { 
        res.redirect('/users/sign-in');
     }
    next()
  }

  
router.post('/create', postController.create);
router.get('/destroy/:id', postController.destroy);

module.exports = router;