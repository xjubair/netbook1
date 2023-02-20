const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

router.get('/profile/:id', userController.profile);
router.post('/update/:id', userController.update);

router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
router.post('/create', userController.createSession);
router.post('/signin', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.signInUser);
router.get('/sign-out', userController.logout);
module.exports = router;