const express = require('express');
let router = express.Router();
let controller = require('../controllers/loginController');

router.get('/login', controller.login);
/* router.post('/login', controller.processLogin); */


module.exports = router;