const router = require('express').Router();
const auth = require('../controllers/auth.controller');

router.post('/signup', auth.postSignup);

module.exports = router;
