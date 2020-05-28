const router = require('express').Router();
const auth = require('../controllers/auth.controller');

router.post('/signin', auth.postSignin);

module.exports = router;
