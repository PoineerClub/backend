const express = require('express');
const {  signin, signup ,signout} = require('../controllers/user');

const router = express.Router();


router.post('/signin', signin)
router.post('/signup', signup)
router.get('/signout',signout)


module.exports = router;