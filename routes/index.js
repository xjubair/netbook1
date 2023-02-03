const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

// console.log("Router loaded");
router.get('/',homeController.home)
router.get('/users',userController.profile)
module.exports = router;